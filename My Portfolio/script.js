window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  menuToggle.classList.toggle("active");

  var menu = document.querySelector(".head-menu");
  menu.classList.toggle("active");
}