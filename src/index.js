const express = require("express");
const connect = require("./config/database");
const Comment = require("./models/comment");
const TweetRepository = require("./repository/tweet-repository");

const app = express();

app.listen(3000, async () => {
    console.log("Server Started");
    await connect();
    console.log("MongoDB Connected");

    const tweetRepo = new TweetRepository();
    // Now when we get our Tweet the Comments field is Storing the objId of the Comment and not the Comment data, we can populate it
    // with the Comment data, by using autopopulate
    const tweet = await tweetRepo.getWithComment("64340d2d3bc6d3d46148f24a");
    console.log(tweet);
});
