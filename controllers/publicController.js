const modelTweet = require("../models/modelTweet");
const User = require("../models/modelUser");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const publicController = {
  showHome: async (req, res) => {
    res.render("home");
  },

  showRegister: async (req, res) => {
    res.render("register");
  },

  createUser: async (req, res) => {
    console.log(req.body);
    const password = req.body.password;

    const hash = await bcrypt.hash(password, 8);
    const newUser = new User({
      firstname: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.redirect("/");
  },

  showLogin: async (req, res) => {
    res.render("login");
  },

  showTwitterHome: async (req, res) => {
    const users = await User.find({});
    res.render("twitterHome", { users });
  },
  login: (req, res) => {},
};

module.exports = publicController;
