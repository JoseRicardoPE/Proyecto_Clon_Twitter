const authenticatedUser = function authenticatedUser(req, res, next) {
  if (req.session.passport) next();
  else res.render("login");
};

module.exports = authenticatedUser;
