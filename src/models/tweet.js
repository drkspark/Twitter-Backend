const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "Can't create tweet without content"],
            // max: Maximum number of the character's in the tweet
            max: [250, "Tweet can't be more than 250 characters"],
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Like",
            },
        ],
        // This is not required as we are storing the TweetId across the TAG
        // hashtags: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Hashtag"
        //     }
        // ]
    },
    { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
