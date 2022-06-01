const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Tweet = require("../models/modelTweet");
const User = require("../models/modelUser");

module.exports = async () => {
  // Borramos la colección

  for (let i = 0; i < 20; i++) {
    // const randomUser = await User.findOne().skip(Math.random() * 10);
    const tweet = await new Tweet({
      content: faker.lorem.paragraph(),
      // author: randomUser._id,
      createdAt: new Date(),
    });
    tweet.save();
    // randomUser.tweets = tweet._id;
    // randomUser.save();
  }
};

// module.exports = async () => {
//   const tweet = await new Tweet({
//     content: "Hola",
//   });
//   tweet.save();
// };
