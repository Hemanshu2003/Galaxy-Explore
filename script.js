// mobile nav bar animation

const menuBtn = document.querySelector(".menu-btn");
const mobileCont = document.querySelector(".mobile-container");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
});

// for slide
const leftBtn = document.querySelector(".slider__btn--left");
const rightBtn = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let currSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector(".dots");

const displaySlide = function (slideNO) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - slideNO) * 150}%)`;
  });
};

const displayDots = function () {
  slides.forEach((slide, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

// initilization

displaySlide(0);
displayDots();
activateDots(0);

// go to next slide

rightBtn.addEventListener("click", function () {
  currSlide++;
  if (currSlide === maxSlide) currSlide = 0;

  displaySlide(currSlide);
  activateDots(currSlide);
});

// go to prev slide

leftBtn.addEventListener("click", function () {
  currSlide--;
  if (currSlide === -1) currSlide = maxSlide - 1;

  displaySlide(currSlide);
  activateDots(currSlide);
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.getAttribute("data-slide");
    displaySlide(slide);
    activateDots(slide);
  }
});
