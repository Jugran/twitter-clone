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

        const { role, uuid, email } = jwt.verify(idToken, JWT_SECRET);
        res.locals.role = role;
        res.locals.uuid = uuid;
        res.locals.email = email;
        res.locals.authenticated = true;
        next();
    }
    catch (error) {
        return res.status(401).json({ success: false, error: "Unauthorized", message: "invalid or expired token" });
    }

}

exports.getTutorAccess = (req, res, next) => {
    return verifyAuth(req, res, () => {
        if (res.locals.authenticated) {
            if (res.locals.role == "tutor") {
                return next();
            }
            return res.sendStatus(403);

        }
        else {
            return res.status(401).json({ success: false, error: "Unauthorized", message: "invalid or expired token" });
        }
    })
};

exports.getStudentAccess = (req, res, next) => {
    return verifyAuth(req, res, () => {
        if (res.locals.authenticated) {
            if (res.locals.role == "student") {
                return next();
            }
            return res.sendStatus(403);

        }
        else {
            return res.status(401).json({ success: false, error: "Unauthorized", message: "invalid or expired token" });
        }
    })
};


exports.verifyAuth = verifyAuth;