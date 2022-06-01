const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Tweet = require("../models/modelTweet");
const User = require("../models/modelUser");

module.exports = async () => {
  // Borramos la colección
  await Tweet.collection.drop();

  const users = await User.find();
  console.log(users.length);
  for (let i = 0; i < users.length; i++) {
    const tweet1 = await new Tweet({
      content: faker.lorem.paragraph(),
      author: users[i],
      createdAt: new Date(),
    });
    const tweet2 = await new Tweet({
      content: faker.lorem.paragraph(),
      author: users[i],
      createdAt: new Date(),
    });

    await tweet1.save();
    await tweet2.save();
    await User.findByIdAndUpdate(users[i], {
      $push: { tweets: [tweet1._id, tweet2._id] },
    });
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
