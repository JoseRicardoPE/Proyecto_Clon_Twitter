require("dotenv").config();
const express = require("express");
const app = express();
const APP_PORT = 3001;
const dbInitialSetup = require("./dbInitialSetup");
const routes = require("./routes/routes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dbInitialSetup();

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
