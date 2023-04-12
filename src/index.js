const express = require("express");
const connect = require("./config/database");
const { PORT } = require("./config/serverConfig");

const app = express();

const HashtagRepository = require("./repository/hashtag-repository");

app.listen(PORT, async () => {
    console.log("Server Started");
    await connect();
    console.log("MongoDB Connected");
    const repo = new HashtagRepository();
});
