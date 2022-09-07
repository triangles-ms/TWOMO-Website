const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  // effect: "cube",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = function () {
  scrollFunction();
};

// function scrollFunction() {
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//     header.style.height = "14rem";
//     header.classList.add("active");
//   } else {
//     header.style.height = "20rem";
//     header.classList.remove("active");
//   }
// }
