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

userRouter.get("/follow/:id", userController.followUser);

userRouter.get("/unfollow/:id", userController.unfollowUser);

module.exports = userRouter;
