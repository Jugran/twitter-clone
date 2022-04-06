const Tweet = require('../models/tweet.model');

exports.postNewTweet = async (request, response) => {
    const { text } = request.body;
    const { id } = response.locals;

    try {
        
        const data = {
            text,
            userID: id
        }
        
        console.log("🚀 ~ data", data)

        const tweet = await Tweet.query().insert(data);

        console.info('Created new tweet:', tweet.id);
        return response.status(200).send({ success: true, tweet_id: tweet.id });

    }
    catch(error){
        console.error("🚀 Error Posting Tweet:", error.message);
        return response.status(400).send({ sucess: false, error: "Cannot Post Tweet" });
    }

}
