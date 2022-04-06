const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Create 
 * @param {object} body Body of JWT token
 * @param {number} [max_age] token validity in seconds. Default 3 days
 * @returns {string} JSON Web Token string
 */
const createToken = (body, max_age = 3 * 24 * 60 * 60) => {
    return jwt.sign(body, JWT_SECRET, { expiresIn: max_age });
};


exports.signUp = async (request, response) => {
    const { username, password } = request.body;

    try {

        const person = await User.query().insert({
            username,
            password
        });

        console.log("New user added", person.username);
        return response.status(200).send({ success: true });
    }
    catch (error) {
        console.error("🚀 Error Signup", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot Signup User" });
    }
}

exports.login = async (request, response) => {
    const { username, password } = request.body;

    try {

        const user = await User.query().first().where({ username });

        if (!user) {
            return response.status(400).send({ success: false, error: "User not found" });
        }

        // verify the password is correct
        const passwordValid = await user.verifyPassword(password);

        if (!passwordValid) {
            console.error('Incorrect Password for user:', user.username);
            return response.status(401).send({ success: false, error: "Incorrect Password" });
        }

        console.log('User logged in:', user.username);
        
        const token = createToken({ username: user.username, id: user.id });
        return response.status(200).send({ success: true, token });

    }
    catch (error) {
        console.error("🚀 Error Login", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot Login User" });
    }

}