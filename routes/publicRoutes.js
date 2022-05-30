const express = require("express");
const publicRouter = express.Router();
const publicController = require("../controllers/publicController");
const passport = require("passport");

publicRouter.get("/", publicController.showHome);
publicRouter.get("/register", publicController.showRegister);
publicRouter.get("/login", publicController.showLogin);
publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/twitterHome",
    failureRedirect: "/login",
  })
);
publicRouter.get("/twitterHome", publicController.showTwitterHome);

module.exports = publicRouter;
