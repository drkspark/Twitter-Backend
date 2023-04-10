const Tweet = require("../models/tweet");

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    // By default it will get first 10 Comments
    async getFew(offset = 0, limit = 10) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComment(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: "comments",
            });
            // path: Defines in which field we have to populate
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {
                new: true,
            });
            // here {new: true} is used to get the updated data, by default we will be getting the last info

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;
