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
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
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
