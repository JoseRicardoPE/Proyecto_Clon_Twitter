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
      createdAt: req.body.createdAt,
    });
    await newTweet.save();
    res.redirect("/homeUser");
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  },
  createBio: async (req, res) => {
    const user = await User.findById(req.user.id);
    user.description = req.body.description;
    user.save();
    res.redirect("/homeUser");
  },
};

module.exports = userController;
