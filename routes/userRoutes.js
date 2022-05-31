const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/homeUser", userController.showHomeUser);

userRouter.post("/createTweet", userController.createTweet);
userRouter.post("/logout", userController.logout);

module.exports = userRouter;
