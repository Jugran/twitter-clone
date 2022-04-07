const User = require('../models/user.model');


exports.fetchProfile = async (request, response) => {
    const { id } = request.params;

    try {
        const user = await User.query()
            .findById(id)
            .select('id', 'name', 'username', 'avatar', 'bio');

        if (!user) {
            return response.status(400).send({ success: false, error: "User not found" });
        }

        console.log('Retrieved user:', user.username);
        return response.status(200).send({ success: true, user });

    }
    catch (error) {
        console.error("Error fetching user profile:", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot fetch User Profile" });
    }
}


exports.updateProfile = async (request, response) => {
    const { name, avatar, bio } = request.body;
    const { id } = response.locals;

    try {
        const updated = await User.query()
            .patchAndFetchById(id, {
                name,
                avatar,
                bio
            });

        delete updated.password; // remove password from response
        delete updated.updatedAt;

        console.log('Updated user:', updated.username);
        return response.status(200).send({ success: true, updated });

    }
    catch (error) {
        console.error("Error profile update:", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot update User Profile" });
    }
}


exports.updateFollowing = async (request, response) => {
    const { id } = response.locals;
    const { followingID, unfollow = false } = request.body;

    try {
        let updated;

        if (unfollow) {

            updated = await User.relatedQuery('following')
                .for(id)
                .unrelate()
                .where('id', followingID);
        }
        else {

            updated = await User.relatedQuery('following')
                .for(id)
                .relate(followingID);
        }

        console.log('Updated user follower:', updated);

        return response.status(200).send({ success: true, updated });

    }
    catch (error) {

        if (error.message.includes('duplicate key')) {
            console.log("User already following:", error.message);
            return response.status(400).send({ sucess: false, error: "User already following" });
        }

        console.error("Error follower update:", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot update User follower" });
    }
}


exports.getFollowers = async (request, response) => {
    const { id } = response.locals;

    try {
        const followers = await User.relatedQuery('followers')
            .for(id)
            .select('id', 'name', 'username', 'avatar');

        console.log('Retrieved followers:', followers.length);
        return response.status(200).send({ success: true, followers });

    }
    catch (error) {
        console.error("Error fetching followers:", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot fetch followers" });
    }
}


exports.getFollowing = async (request, response) => {
    const { id } = response.locals;

    try {
        const following = await User.relatedQuery('following')
            .for(id)
            .select('id', 'name', 'username', 'avatar');

        console.log('Retrieved following:', following.length);
        return response.status(200).send({ success: true, following });

    }
    catch (error) {
        console.error("Error fetching following:", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot fetch following" });
    }
}