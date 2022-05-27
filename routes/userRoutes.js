const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/home", (req, res) => {
  res.render("userProfile");
});

module.exports = adminRouter;
