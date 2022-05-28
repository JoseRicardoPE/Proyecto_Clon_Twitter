const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController")

userRouter.get("/home", userController.showHome);

module.exports = userRouter;
