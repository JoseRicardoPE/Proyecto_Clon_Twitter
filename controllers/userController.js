const User = require("../models/modelUser");
const Tweet = require("../models/modelTweet");

const userController = {
  // Para probar el schema
  addUser: async (req, res) => {},

  showHomeUser: async (req, res) => {
    const loggedUserId = req.user.id;
    const userId = req.params.id;
    // console.log(loggedUserId, userId);
    const user = await User.findOne({ _id: req.params.id });
    res.render("userProfile", { user, loggedUserId, userId });
  },

  createTweet: async (req, res) => {
    console.log(req.body);
    const newTweet = new Tweet({
      content: req.body.content,
    });
    await newTweet.save();
    res.redirect("/twitterHome");
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
    res.redirect(`/homeUser/${req.user.id}`);
  },
  deleteUser: async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.redirect("/");
  },
  followUser: async (req, res) => {
    const loggedUser = await User.findById(req.user._id);
    const followedUser = await User.findById(req.params.id);

    loggedUser.following.push(followedUser);
    followedUser.followers.push(loggedUser);
    loggedUser.save();
    followedUser.save();

    res.redirect(`/homeUser/${req.params.id}`);
  },
  unfollowUser: async (req, res) => {
    const loggedUser = await User.findById(req.user._id);
    const followedUser = await User.findById(req.params.id);

    loggedUser.following.pop(followedUser);
    followedUser.followers.pop(loggedUser);
    loggedUser.save();
    followedUser.save();

    res.redirect(`/homeUser/${req.params.id}`);
  },
};

module.exports = userController;
