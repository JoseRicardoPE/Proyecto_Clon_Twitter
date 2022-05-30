const User = require("../models/modelUser");

module.exports = async () => {
  const user = await new User({
    firstname: "Juan",
    lastname: "Pérez",
    email: "juan@hotmail.com",
    password: "hola",
    description: "hola",
    avatar: "hola",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  user.save();
};
