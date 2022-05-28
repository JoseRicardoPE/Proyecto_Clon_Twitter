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
};

module.exports = publicController;
