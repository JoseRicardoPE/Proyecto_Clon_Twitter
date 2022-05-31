// Ventana modal tweet
const btnActiveModal = document.getElementById("btn__menu--twittear");
const sectionModal = document.getElementById("section__modal--tweet");
const btnSubmit = document.getElementById("btn__submit--tweet");
const btnClose = document.getElementById("close__modal");

btnActiveModal.addEventListener("click", function () {
  sectionModal.style.opacity = "1";
  sectionModal.style.visibility = "visible";
  sectionModal.classList.toggle("section__modal--tweet");
});

btnClose.addEventListener("click", function () {
  sectionModal.style.opacity = "0";
  sectionModal.style.visibility = "hidden";
  sectionModal.classList.toggle("section__modal--tweet");
}); 