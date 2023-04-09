const express = require("express");
const connect = require("./config/database");
const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");

const app = express();

app.listen(3000, async () => {
    console.log("Server Started");
    await connect();
    console.log("MongoDB Connected");

    const tweetRepo = new TweetRepository();
    
    // try {
    //     const tweet = await tweetRepo.create({
    //         content: 'First Tweet with Comments',
    //         comments: [
    //             { content: 'First Comment' },
    //             { content: 'Single Comment' },
    //         ],
    //     });
    //     console.log(tweet);
    // } catch (err) {
    //     console.log(err);
    // }
});
