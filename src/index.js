const express = require("express");
const connect = require("./config/database");
const { PORT } = require("./config/serverConfig");

const app = express();

const HashtagRepository = require("./repository/hashtag-repository");
const TweetService = require("./services/tweet-service");

app.listen(PORT, async () => {
    console.log("Server Started");
    await connect();
    console.log("MongoDB Connected");
    const repo = new HashtagRepository();
    const srv = new TweetService();
    await srv.create({
        content: "This is my #first #TWEET of this #repo #FUCKING",
    });
    // await repo.bulkCreate([
    //     { title: "first" },
    //     { title: "repo" },
    //     { title: "tweet" },
    // ]);
});
