const TweetService = require("../services/tweet-service");

const service = new TweetService();

async function createTweet(req, res) {
    try {
        const response = await service.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created a new Tweet",
            data: response,
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wront",
            data: {},
            err: error,
        });
    }
}

module.exports = { createTweet };
