// Navigation Header Mobail
const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".nav-btn i");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click" , function() {
    if(navBar.classList.contains("fa-bars")) {
        navMenu.classList.add("nav-menu--open");
        navBar.classList = "fa fa-xmark";
    } else {
        navMenu.classList.remove("nav-menu--open");
        navBar.classList = "fa fa-bars";
    }
})

// Navigation Header Desktop
const header = document.querySelector(".header");
const headerScroll = document.querySelector(".header__scroll");

function headerGoUp() {
    if (window.pageYOffset > 2) {
        header.classList.add("header__scroll");
    } else {
        header.classList.remove("header__scroll");
    }
}

// Client Rating
const nameClient = document.querySelector(".client-desc__name");
const ratingClient = document.querySelector(".client-info__rating");
const client = document.querySelector(".client");

client.addEventListener("click" , function() {
    nameClient.style.color = "#4b8ef1";
    ratingClient.style.color = "#4b8ef1";
})  // In this part, there is a need for a loop ;