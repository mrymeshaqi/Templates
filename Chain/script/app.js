'use strict';

// Selecting
const header = document.querySelector('.header');
const homeTitle = document.querySelector('.main-banner__title');
const navBtn = document.querySelector('.nav-btn');
const navBar = document.querySelector('.nav-btn i');
const navMenu = document.querySelector('.nav-menu');
const clientContainer = document.querySelector('.comment-clients');
const nameClient = document.querySelector('.client-desc__name');
const ratingClient = document.querySelector('.client-info__rating');

// Start App
// ===========================================================>>
// Header Navigation
const stickyHeader = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add('header__scroll');
  else header.classList.remove('header__scroll');
};
const homeObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
});
homeObserver.observe(homeTitle);

// ===========================================================>>
// Navigation Header Mobail

// 1.Solution =>
// navBtn.addEventListener('click', function () {
//   if (navBar.classList.contains('fa-bars')) {
//     navMenu.classList.add('nav-menu--open');
//     navBar.classList = 'fa fa-xmark';
//   } else {
//     navMenu.classList.remove('nav-menu--open');
//     navBar.classList = 'fa fa-bars';
//   }
// });

// 2.Solution =>
const displayMenu = function (state = false) {
  if (state) {
    navMenu.classList.add('nav-menu--open');
    navBar.className = 'fa fa-xmark';
  } else {
    navMenu.classList.remove('nav-menu--open');
    navBar.className = 'fa fa-bars';
  }
};

let state = false;
navBtn.addEventListener('click', function () {
  displayMenu(!state);
  state = !state;
});

// ===========================================================>>
// Reveal Sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

document.querySelectorAll('section').forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// ===========================================================>>
// Menu Activation
const highlightActiveSection = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  document.querySelector('a.active')?.classList.remove('active');
  document
    .querySelector(`a[href='#${entry.target.id}']`)
    .classList.add('active');
};

const menuSectionObserver = new IntersectionObserver(highlightActiveSection, {
  root: null,
  threshold: window.innerWidth < 1200 ? 0.2 : 0.5,
});

document
  .querySelectorAll('.item')
  .forEach(item => menuSectionObserver.observe(item));

// ===========================================================>>
// Client Rating
clientContainer.addEventListener('click', function (e) {
  const user = e.target.closest('.client');
  if (!user) return;

  // remove style
  document.querySelector('.client.highlight')?.classList.remove('highlight');
  document
    .querySelector('.comment-content--show')
    ?.classList.remove('comment-content--show');

  // Styling
  user.classList.add('highlight');
  document
    .querySelector(`.client__comment--${user.id}`)
    .classList.add('comment-content--show');
});
