const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweet = Schema({
  content: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Tweets", Tweet);
