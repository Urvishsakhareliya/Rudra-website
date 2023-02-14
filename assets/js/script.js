$(".nav-blacklayer").hide();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  $(".nav-blacklayer").toggle();
  $("body").toggleClass("overflow-hidden");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  $(".nav-blacklayer").hide();
  $("body").removeClass("overflow-hidden");
}

$(document).ready(function () {
  $(".close-nav").click(function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    $(".nav-blacklayer").hide();
    $("body").removeClass("overflow-hidden");
  });
  $(".nav-blacklayer").click(function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    $(".nav-blacklayer").hide();
    $("body").removeClass("overflow-hidden");
  });
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

 


