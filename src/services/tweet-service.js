const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashtagRepository();
    }

    //  Extract HashTags here using Regex
    extractTags(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substring(1).toLowerCase());
        return tags;
    }

    // Filtering the new Tags
    getNewTags(tags, oldTags) {
        let oldTagTitles = oldTags.map((tag) => tag.title);
        // console.log("Tags present in system", oldTagTitles);

        let notPresentTags = tags.filter((tag) => !oldTagTitles.includes(tag));
        return notPresentTags;
    }

    // Create a Tweet
    async create(data) {
        const tags = this.extractTags(data);
        // console.log("Tags extracted from Tweet", tags);

        let oldTags = await this.hashTagRepository.findAll(tags);

        let newTags = this.getNewTags(tags, oldTags);
        // console.log("Not Present", newTags);

        const tweet = await this.tweetRepository.create(data);
        // console.log(tweet);
        const tweetId = tweet._id;
        
        // Adding the current tweetId to the tags which are alreadu present in the system
        oldTags.forEach(async (tag) => {
            tag.tweets.push(tweetId);
            await tag.save();
        });

        // Making the Tags as an Array of Objects to pass into bulkCreate
        newTags = newTags.map((tag) => {
            return { title: tag, tweets: [tweetId] };
        });
        // console.log(newTags);

        // Adding new Tags
        await this.hashTagRepository.bulkCreate(newTags);

        return tweet;
    }
}

module.exports = TweetService;
// TODO: Create hashtags and add here
// Completed
/**
 * 1. Bulk Create in Mongoose use insertMany()
 * 2. Filter title of hashtag based on multiple tags (Most Expensive) i.e. make index based on this
 * 3. How to add tweet id inside all the hashtags
 *      i. If they are present then we can add the Tweet ID
 *     ii. If not present then we have to create new
 * # To search using OR just pass and property: array of values
 */
/**
 * herllo this is #tweet #web alknhasfl ;asf;af;af
 */
