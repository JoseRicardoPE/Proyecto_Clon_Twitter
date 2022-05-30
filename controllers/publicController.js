const modelTweet = require("../models/modelTweet");

const publicController = {
  showHome: async (req, res) => {
    res.render("home");
  },

  showRegister: async (req, res) => {
    res.render("register");
  },

  showLogin: async (req, res) => {
    res.render("login");
  },

  showTwitterHome: async (req, res) => {
    res.render("twitterHome");
  },
  login: (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/twitterHome",
      failureRedirect: "/login",
    });
  },
};

module.exports = publicController;
