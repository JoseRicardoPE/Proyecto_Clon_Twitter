const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweet = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [String],
});

module.exports = mongoose.model("Tweet", Tweet);
