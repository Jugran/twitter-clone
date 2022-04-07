const Joi = require('joi');

exports.updateProfileSchema = Joi.object({
    name: Joi.string().max(120).required(),
    avatar: Joi.string().alphanum().max(50).required(),
    bio: Joi.string().max(255).required()
});