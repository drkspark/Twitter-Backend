const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "Can't create tweet without content"],
        },
        userEmail: {
            type: String,
        },
        date: {
            type: String,
        },
        comments: [
            {
                content: {
                    type: String,
                    required: [
                        true,
                        "Comment can't be created without Content",
                    ],
                },
            },
        ],
    },
    { timestamps: true }
);

tweetSchema.pre("save", function (next) {
    let date = JSON.stringify(this.createdAt)
        .substring(1, 11)
        .split("-")
        .reverse()
        .join("-");

    this.date = date;
    next();
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
