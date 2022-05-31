const express = require("express");
const publicRouter = express.Router();
const publicController = require("../controllers/publicController");
const passport = require("passport");
const authenticatedUser = require("../middleware/authenticatedUser");

publicRouter.get("/", publicController.showHome);
publicRouter.get("/register", publicController.showRegister);
publicRouter.post("/register", publicController.createUser);
publicRouter.get("/login", publicController.showLogin);
publicRouter.post(
  "/login",
  passport.authenticate("local-signup", {
    successRedirect: "/twitterHome",
    failureRedirect: "/login",
  })
);
publicRouter.get(
  "/twitterHome",
  authenticatedUser,
  publicController.showTwitterHome
);

module.exports = publicRouter;
