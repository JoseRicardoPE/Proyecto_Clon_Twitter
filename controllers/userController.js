const User = require("../models/modelUser");
const Tweet = require("../models/modelTweet");

const userController = {
  // Para probar el schema
  addUser: async (req, res) => {},

  showHomeUser: async (req, res) => {
    console.log(req.params);
    const user = await User.findOne({ _id: req.params.id });
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
  createBio: async (req, res) => {
    const user = await User.findById(req.user.id);
    user.description = req.body.description;
    user.save();
    res.redirect("/homeUser/:id");
  },
  deleteUser: async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.redirect("/");
  },
};

module.exports = userController;
