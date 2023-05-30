const Tweet = require("../models/tweet");
const CrudRepository = require("../repository/crud-repository");

class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
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

}

module.exports = TweetRepository;
