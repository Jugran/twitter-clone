const { Router } = require('express');

const { postNewTweet, getUserTweets, deleteTweet, getTweetsFeed } = require('../controllers/tweets.controller');
const { validate } = require('../middlewares/validateSchema');
const { tweetSchema } = require('../schemas/tweet.schema')

const tweet = Router();

tweet.post('/new', validate(tweetSchema), postNewTweet);
tweet.get('/user/:id', getUserTweets);
tweet.get('/feed', getTweetsFeed);
tweet.delete('/delete/:id', deleteTweet);

module.exports = tweet;