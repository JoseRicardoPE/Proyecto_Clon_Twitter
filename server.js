require("dotenv").config();
const express = require("express");
const app = express();
const APP_PORT = 3001;
const dbInitialSetup = require("./dbInitialSetup");
const routes = require("./routes/routes");
const passport = require("./passport");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "algomuysecreto",
    resave: false,
    saveUninitialized: false,
  })
);

// dbInitialSetup();

passport(app);
routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
