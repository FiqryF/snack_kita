const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const humburger = document.querySelector("#humburger-menu");
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
