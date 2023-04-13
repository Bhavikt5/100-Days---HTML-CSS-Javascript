/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/*=============== VALUE ACCORDION ===============*/

const accordion = document.querySelectorAll(".accordion");
const showContent = document.querySelectorAll(".showContent");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    if (showContent.className === "showContent active") console.log("active");
    showContent[i].classList.toggle("active");
  });
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
