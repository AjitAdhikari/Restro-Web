let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("Menu icon clicked");
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

searchIcon.onclick = () => {
    console.log("Search icon clicked");
    searchForm.classList.toggle('active');
};

closeSearch.onclick = () => {
    console.log("Close search clicked");
    searchForm.classList.remove('active');
};

var swiper1 = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper2 = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
