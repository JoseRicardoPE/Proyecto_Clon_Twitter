const User = require("../models/modelUser");
const Tweet = require("../models/modelTweet");

const userController = {
  // Para probar el schema
  addUser: async (req, res) => {},

  showHomeUser: async (req, res) => {
    console.log(req.user);
    const user = await User.findOne({ _id: req.user._id });
    res.render("userProfile", { user });
  },

  createTweet: async (req, res) => {
    console.log(req.body);
    const newTweet = new Tweet({
      content: req.body.content,
    });
    await newTweet.save();
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  },
};
module.exports = userController;
