const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect(
        "mongodb+srv://drkspark:AlphA321@cluster0.iovairz.mongodb.net/twitter"
    );
    // await mongoose.connect('mongodb://localhost/twitter_Dev');
};

module.exports = connect;
