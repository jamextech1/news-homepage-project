const btn = document.querySelector(".hamburger");
const closeNav = document.querySelector(".hamburger-x");
const links = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
btn.addEventListener("click", function (e) {
  links.style.right = "0";
});
closeNav.addEventListener("click", function (e) {
  links.style.right = "-1000px";
});
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", function (e) {
    links.style.right = "-1000px";
  });
});
