const { Router } = require('express');

const { postNewTweet } = require('../controllers/tweets.controller');
const { validate } = require('../middlewares/validateSchema');
const { tweetSchema } = require('../schemas/tweet.schema')

const tweet = Router();

tweet.post('/new', validate(tweetSchema), postNewTweet);

module.exports = tweet;