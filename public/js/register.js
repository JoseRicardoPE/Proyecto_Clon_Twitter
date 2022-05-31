const contenedor1 = document.getElementById("contenedor-1");
const contenedor2 = document.getElementById("contenedor-2");
const contenedor3 = document.getElementById("contenedor-3");
const contenedor4 = document.getElementById("contenedor-4");

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");
const arrow3 = document.getElementById("arrow-3");

function contenedoresUnoYDos() {
  contenedor1.classList.toggle("ocultar");
  contenedor2.classList.toggle("ocultar");
}

function contenedoresDosYTres() {
  contenedor2.classList.toggle("ocultar");
  contenedor3.classList.toggle("ocultar");
}

function contenedoresTresYCuatro() {
  contenedor3.classList.toggle("ocultar");
  contenedor4.classList.toggle("ocultar");
}
button1.addEventListener("click", contenedoresUnoYDos);
arrow1.addEventListener("click", contenedoresUnoYDos);

button2.addEventListener("click", contenedoresDosYTres);
arrow2.addEventListener("click", contenedoresDosYTres);

button3.addEventListener("click", contenedoresTresYCuatro);
arrow3.addEventListener("click", contenedoresTresYCuatro);
