const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  res.render("home");
});
publicRouter.get("/register", (req, res) => {
  res.render("register");
});
publicRouter.get("/login", (req, res) => {
  res.render("login");
});

module.exports = publicRouter;
