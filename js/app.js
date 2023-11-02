const offNav = document.querySelector(".my-off-canvas");
const menuBar = document.querySelector(".off-nav-box");
const menuClose = document.querySelector(".off-close");

menuBar.addEventListener("click", () => {
  offNav.classList.add("active");
});

menuClose.addEventListener("click", () => {
  offNav.classList.remove("active");
});
