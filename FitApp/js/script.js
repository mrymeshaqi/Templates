'use strict';

const $ = document;
const header = $.querySelector('.header');
const logo = $.querySelector('.nav-mobile__logo');
const headerBtn = $.querySelector('.nav-mobile__btn');
const headerIcon = $.querySelector('.nav-mobile__icon');
const menu = $.querySelector('.menu');
const menuItem = $.querySelectorAll('.menu__item');
const menuItemActive = $.querySelector('.menu__item--active');
// const menuItemAfter = window.getComputedStyle(menuItemActive, '::after');

// Scroll header
function headerGoUp() {
  if (window.getComputedStyle($.body, '::after').content === '"large"' && window.pageYOffset > 2) {
    header.classList.add('header__scroll');
    logo.classList.add('text-primary-gradient');
    menu.classList.add('menu__scroll');
    for (const item of menuItem) {
      item.classList.add('menu__item--padding');
    }
    menuItemActive.style.setProperty('--bgColor', '#4294e3');
  } else {
    header.classList.remove('header__scroll');
    logo.classList.remove('text-primary-gradient');
    menu.classList.remove('menu__scroll');
    for (const item of menuItem) {
      item.classList.remove('menu__item--padding');
    }
    menuItemActive.style.setProperty('--bgColor', '#fff');
  }
}
window.addEventListener('scroll', headerGoUp);

// Header in phone mode
headerBtn.addEventListener('click', function () {
  menu.classList.toggle('menu-open');
  headerIcon.classList.toggle('fa-bars');
  headerIcon.classList.toggle('fa-xmark');
});

// Phone
const circles = $.querySelectorAll('.circle');
const phoneImage = $.querySelector('.phone__img');

for (const circle of circles) {
  circle.addEventListener('click', function () {
    // console.log(circle);
    phoneImage.src = `images/screenshot-${circle.id}.png`;
  });
}

// Scroll Navigation
menu.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('menu__link')) {
    // 1. Old Solution
    // const linkElement = document.querySelector(e.target.getAttribute('href'));
    // window.scrollTo({
    //   left: linkElement.getBoundingClientRect().left + window.pageXOffset,
    //   top: linkElement.getBoundingClientRect().top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    // 2. New Solution
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Slider
const sliderContainer = document.querySelector('.slider');
const firstSlides = document.querySelectorAll('.home-slide__img');
// const secondSlides = document.querySelectorAll('.firstFeature-slide__img');

// state
let currentSlide = 0;
const maxSlide = firstSlides.length;

const goToSlide = function (value) {
  firstSlides.forEach((slide, i) => (slide.style.transform = `translateX(${100 * (i - value)}%)`));
};
goToSlide(0);

// Two Slider
// const goToSlide = function (slider, value) {
//   slider.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - value)}%)`));
// };
// goToSlide(firstSlides, 0);
// goToSlide(secondSlides, 0);

//
const seeSlider = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      const tick = function () {
        // next slide
        if (currentSlide === maxSlide - 1) currentSlide = 0;
        else currentSlide++;

        goToSlide(currentSlide);

        // if (!entry.isIntersecting) clearInterval(timer);
        console.log(entry.isIntersecting);
      };

      const timer = setInterval(tick, 3000);
    } else {
      observer.unobserve(sliderContainer);
    }
  },
  { root: null, threshold: 0 }
);
// seeSlider.observe(sliderContainer);
