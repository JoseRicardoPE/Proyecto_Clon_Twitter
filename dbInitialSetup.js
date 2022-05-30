const mongoose = require("mongoose");
// const { faker } = require("@faker-js/faker");
// const { User, Tweet } = require("./models");

module.exports = async () => {
  mongoose.connect("mongodb://127.0.0.1/clonTwitter");

  // mongoose.connection
  //   .once("open", () =>
  //     console.log("¡Conexión con la base de datos establecida!")
  //   )
  //   .on("error", (error) => console.log(error));

  // Ejecutar seeders (datos de prueba):

  await require("./seeders/userSeeder")();
  console.log("[Database] Los usuarios fueron insertados");
  await require("./seeders/tweetSeeder")();
  console.log("[Database] Los tweets fueron insertados");
};
