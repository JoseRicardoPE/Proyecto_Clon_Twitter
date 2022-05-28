const express = require("express");
const publicRouter = express.Router();
const publicController = require("../controllers/publicController");

publicRouter.get("/", publicController.showHome);
publicRouter.get("/register", publicController.showRegister);
publicRouter.get("/login", publicController.showLogin);

module.exports = publicRouter;
