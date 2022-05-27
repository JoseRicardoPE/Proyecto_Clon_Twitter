const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(userRoutes);
};
