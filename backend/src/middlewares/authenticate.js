const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const verifyAuth = (req, res, next) => {

    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {

        console.error("No auth token was present in the Authorization header.");
        return res.status(401).send({ success: false, error: "Unauthorized", message: "No access token present" });
    }

    // retrieve the authorization header
    const { authorization } = req.headers;
    const { 1: idToken } = authorization.split("Bearer ");

    try {
        // verify token 

        const { id, username } = jwt.verify(idToken, JWT_SECRET);
        res.locals.id = id;
        res.locals.username = username;
        next();
    }
    catch (error) {
        return res.status(401).json({ success: false, error: "Unauthorized", message: "invalid or expired token" });
    }

}

exports.verifyAuth = verifyAuth;