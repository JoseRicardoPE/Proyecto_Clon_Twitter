const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/homeUser", userController.showHomeUser);

userRouter.post("/createTweet", userController.createTweet);

module.exports = userRouter;
