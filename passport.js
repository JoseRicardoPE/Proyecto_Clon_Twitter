const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const User = require("./models/modelUser");

module.exports = function (app) {
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async function verify(email, password, cb) {
        const user = await User.findOne({ email });
        if (!user) {
          return cb(null, false, { message: "Datos incorrectos" });
        }
        const compare = await compare(password, user.password);
        if (compare) {
          return cb(null, user);
        }
        return cb(null, false, { message: "Datos incorrectos" });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        done(error, user);
      });
  });
};
