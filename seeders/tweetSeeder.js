const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Tweet = require("../models/modelTweet");

module.exports = async () => {
  // Borramos la colección

  for (let i = 0; i < 20; i++) {
    const tweet = await new Tweet({
      content: faker.lorem.paragraph(),
      createdAt: new Date(),
    });
    tweet.save();
  }
};

// module.exports = async () => {
//   const tweet = await new Tweet({
//     content: "Hola",
//   });
//   tweet.save();
// };
