const menutoogle = document.querySelector(".menu-toogle");
const nav = document.querySelector("nav ul");

menutoogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
