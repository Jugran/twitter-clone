const Joi = require('joi');

exports.authDetails = Joi.object({
    name: Joi.string().max(120),
    username: Joi.string().alphanum().max(120).required(),
    password: Joi.string().ruleset.min(8).max(100).rule({
        "message": 'Password must be at least 8 characters long'
    })
});