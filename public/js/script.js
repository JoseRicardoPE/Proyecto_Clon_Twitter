const contenedor1 = document.getElementById("contenedor-1");
const contenedor2 = document.getElementById("contenedor-2");
const contenedor3 = document.getElementById("contenedor-3");
const contenedor4 = document.getElementById("contenedor-4");

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

button1.addEventListener("click", function () {
  contenedor1.classList.toggle("ocultar");
  contenedor2.classList.toggle("ocultar");
});

button2.addEventListener("click", function () {
  contenedor2.classList.toggle("ocultar");
  contenedor3.classList.toggle("ocultar");
});

button3.addEventListener("click", function () {
  contenedor3.classList.toggle("ocultar");
  contenedor4.classList.toggle("ocultar");
});
