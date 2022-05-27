const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://127.0.0.1/clonTwitter");

  mongoose.connection
    .once("open", () =>
      console.log("¡Conexión con la base de datos establecida!")
    )
    .on("error", (error) => console.log(error));
};
