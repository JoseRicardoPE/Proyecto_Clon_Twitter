const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  description: String,
  avatar: String,
  tweets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("User", User);
