const editButton = document.getElementById("edit-btn");
const editContainer = document.getElementById("edit-container");

editButton.addEventListener("click", showContainer);

function showContainer() {
  editContainer.classList.toggle("ocultar");
}

// const followButton = document.getElementById("follow-btn");
// const unfollowButton = document.getElementById("unfollow-btn");

// function transformButton() {
//   console.log("holas");
//   followButton.classList.toggle("ocultar");
//   unfollowButton.classList.toggle("ocultar");
// }

// followButton.addEventListener("click", transformButton);
