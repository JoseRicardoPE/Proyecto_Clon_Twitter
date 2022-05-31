const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/modelUser");
const { findById } = require("../models/modelUser");

userRouter.get("/homeUser/:id", userController.showHomeUser);
userRouter.post("/homeUser", userController.createBio);

userRouter.post("/createTweet", userController.createTweet);
userRouter.post("/logout", userController.logout);

module.exports = userRouter;
