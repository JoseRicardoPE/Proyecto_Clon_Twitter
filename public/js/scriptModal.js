// Ventana modal tweet
const btnActiveModal = document.getElementById("btn__menu--twittear");
const sectionModal = document.getElementById("section__modal--tweet");
const btnSubmit = document.getElementById("btn__submit--tweet");
const btnClose = document.getElementById("close__modal");

btnActiveModal.addEventListener("click", () => {
  sectionModal.classList.toggle("ocultar");
});

btnClose.addEventListener("click", () => {
  sectionModal.classList.toggle("ocultar");
});
