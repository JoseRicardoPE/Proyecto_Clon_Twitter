const modelTweet = require("../models/modelTweet");
const User = require("../models/modelUser");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

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
    const user = await User.findOne({ email: req.body.email });

    const hash = await bcrypt.hash(password, 8);

    if (!user) {
      const newUser = new User({
        firstname: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        avatar: faker.image.avatar(),
      });
      await newUser.save();
    } else {
      res.send("Este email ya está siendo utilizado");
    }

    res.redirect("/");
  },

  showLogin: async (req, res) => {
    res.render("login");
  },

  showTwitterHome: async (req, res) => {
    const users = await User.find({});
    const myUser = await User.findById(req.user._id).populate("following");
    console.log(myUser);
    res.render("twitterHome", { myUser, users });
  },
};

module.exports = publicController;
