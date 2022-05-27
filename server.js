const dbInitialSetup = require("./dbInitialSetup");
const express = require("express");
const app = express();
const APP_PORT = 3001;
const routes = require("./routes/routes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

dbInitialSetup();

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
