const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersTwetter = Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  description: String,
  avatar: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Users", usersTwetter);

