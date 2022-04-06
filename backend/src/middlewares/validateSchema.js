
exports.validate = (schema, property) => {
    return (req, res, next) => {
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };

        const { error, value, warning } = schema.validate(req.body, options);

        if (error) {
            const message = error.details.map(e => e.message.replace(/\"/g, "'"))
            return res.status(400).send({ errors: message });
        }
        else {
            req.body = value
            // return res.status(200).send({ "message": "recevied", payload: value });
            next();
        }
    }
}