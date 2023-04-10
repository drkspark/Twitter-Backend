const express = require("express");
const connect = require("./config/database");
const { PORT } = require("./config/serverConfig");
const Comment = require("./models/comment");
const TweetRepository = require("./repository/tweet-repository");

const app = express();

app.listen(PORT, async () => {
    console.log("Server Started");
    await connect();
    console.log("MongoDB Connected");

    const tweetRepo = new TweetRepository();
    // Now when we get our Tweet the Comments field is Storing the objId of the Comment and not the Comment data, we can populate it
    // with the Comment data, by using autopopulate
    // const tweet = await tweetRepo.getFew();
    // console.log(tweet.length);
    // const tweet = await tweetRepo.get("6433c746605a6a76687b53b9");
    // console.log(tweet);
    // console.log(tweet.contentWithEmail);
});
