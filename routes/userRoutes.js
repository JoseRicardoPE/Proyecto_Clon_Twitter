const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/modelUser");
const { findById } = require("../models/modelUser");
const authenticatedUser = require("../middleware/authenticatedUser");

userRouter.get("/homeUser/:id", authenticatedUser, userController.showHomeUser);
userRouter.post("/homeUser", authenticatedUser, userController.createBio);

userRouter.post("/createTweet", authenticatedUser, userController.createTweet);
userRouter.post("/logout", authenticatedUser, userController.logout);

userRouter.get("/delete/:id", userController.deleteUser);

userRouter.get("/follow/:id", async (req, res) => {
  const loggedUser = await User.findById(req.user._id);
  const followedUser = await User.findOne({ id: req.params.id });

  loggedUser.following.push(followedUser);
  followedUser.followers.push(loggedUser);
  loggedUser.save();
  followedUser.save();

  res.redirect(`/homeUser/${req.params.id}`);
});

userRouter.get("/unfollow/:id", userController.followUser);

module.exports = userRouter;
