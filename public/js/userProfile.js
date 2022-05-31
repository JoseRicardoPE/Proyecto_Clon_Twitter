const editBoton = document.getElementById("edit-btn");
const editContainer = document.getElementById("edit-container");

editBoton.addEventListener("click", showContainer);

function showContainer() {
  editContainer.classList.toggle("ocultar");
}
