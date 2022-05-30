const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweet = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Tweet", Tweet);
