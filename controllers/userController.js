const User = require("../models/modelUser");

const userController = {
  // Para probar el schema
  addUser: async (req, res) => {},

  showHomeUser: async (req, res) => {
    console.log(req.user);
    const user = await User.findOne({ _id: req.user._id });
    res.render("userProfile", { user });
  },
};

module.exports = userController;
