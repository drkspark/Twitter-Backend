const { TweetRepository } = require("../repository/index");

class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository();
    }

    //  Extract HashTags here using Regex
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);

        // TODO: Create hashtags and add here
        /**
         * 1. Bulk Create in Mongoose use insertMany()
         * 2. Filter title of hashtag based on multiple tags (Most Expensive) i.e. make index based on this
         * 3. How to add tweet id inside all the hashtags
         *      i. If they are present then we can add the Tweet ID 
         *     ii. If not present then we have to create new
         * # To search using OR just pass and property: array of values 
         */
        return tweet;
    }
}

module.exports = TweetService;

/**
 * herllo this is #tweet #web alknhasfl ;asf;af;af
 */