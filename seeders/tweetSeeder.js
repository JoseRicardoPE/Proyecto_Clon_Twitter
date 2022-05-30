const mongoose = require("mongoose");

const Tweet = require("../models/modelTweet");

module.exports = async () => {
  const tweet = await new Tweet({
    content: "Hola",
  });
  tweet.save();
};
