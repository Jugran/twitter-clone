const Joi = require('joi');

exports.tweetSchema = Joi.object({
    text: Joi.string().max(255).required()
})