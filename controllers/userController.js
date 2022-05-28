const userController = {
  showHome: async (req, res) => {
    res.render("userProfile");
  },
};

module.exports = userController;
