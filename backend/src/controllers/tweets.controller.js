const User = require('../models/user.model');
const Tweet = require('../models/tweet.model');

exports.postNewTweet = async (request, response) => {
    const { text } = request.body;
    const { id } = response.locals;

    try {

        const data = {
            text,
            userID: id
        }

        const tweet = await Tweet.query().insert(data);

        console.log('Created new tweet:', tweet.id);
        return response.status(200).send({ success: true, tweet_id: tweet.id });

    }
    catch (error) {
        console.error("Error Posting Tweet:", error.message);
        return response.status(400).send({ success: false, error: "Cannot Post Tweet" });
    }

}


exports.getUserTweets = async (request, response) => {
    const { id } = request.params;

    try {

        if (!id) {
            return response.status(400).send({ success: false, error: "No User ID" });
        }

        const tweets = await Tweet.query()
            .withGraphFetched('user')
            .where('userID', id);

        console.log('Retrieved tweets:', tweets.length);
        return response.status(200).send({ success: true, tweets });
    }
    catch (error) {
        console.error("Error Getting Tweets:", error.message);
        return response.status(400).send({ success: false, error: "Cannot Get Tweets" });
    }
}


exports.deleteTweet = async (request, response) => {
    const { id: tweet_id } = request.params;
    const { id: userID } = response.locals;


    try {
        const tweet = await Tweet.query().where({ id: tweet_id, userID });

        if (!tweet || tweet?.length == 0) {
            return response.status(404).send({ success: false, error: "Cannot find user's tweet to delete" });
        }

        console.log('Deleted tweet:', tweet.id);
        return response.status(200).send({ success: true, tweet_id: tweet.id });
    }
    catch (error) {
        console.error("Error Deleting Tweet:", error.message);
        return response.status(400).send({ success: false, error: "Cannot Delete Tweet" });
    }
}


exports.getTweetsFeed = async (request, response) => {
    const { id } = response.locals;

    try {
        const users = await User.relatedQuery('following')
            .for(id)
            .select('id');

        users.push({ id });

        const tweets = await Tweet.query()
            .withGraphFetched('user')
            .whereIn('userID', users.map(user => user.id))
            .orderBy('createdAt', 'desc');

        console.log('Retrieved tweets:', tweets.length);
        return response.status(200).send({ success: true, tweets });
    }
    catch (error) {
        console.error("Error Getting Tweets:", error.message);
        return response.status(400).send({ success: false, error: "Cannot Get Tweets" });
    }
}