const modelUser = require("../models/modelUser");

const userController = {
  // Para probar el schema
  addUser: async (req, res) => {
    
  },

  showHome: async (req, res) => {
    res.render("userProfile");
  },
};

module.exports = userController;
