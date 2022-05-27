const dbInitialSetup = require("./dbInitialSetup");
const express = require("express");
const app = express();
const APP_PORT = 3001;

dbInitialSetup();

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
