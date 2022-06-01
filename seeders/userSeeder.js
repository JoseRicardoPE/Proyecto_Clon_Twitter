const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const User = require("../models/modelUser");

// Seeder para "User"
const createUsers = async () => {
  await User.collection.drop();
  for (let i = 0; i < 10; i++) {
    const user = await new User({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: "123",
      description: faker.lorem.paragraph(),
      avatar: faker.image.avatar(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await user.save();
  }
};

module.exports = createUsers;
