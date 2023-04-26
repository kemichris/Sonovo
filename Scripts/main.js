// script for the nav bar 
const menuIcon = document.getElementById("nav-icon");
const navMenuItems = document.getElementById("nav-menu-items");
const closeMobileMenu = document.getElementById("menu-close");
const closeSearchBar = document.getElementById("close-search-bar");
const openSearchBar = document.getElementById("open-search-bar");
const searchBar = document.querySelector(".search-bar");
const mobileMenu = document.querySelector(".mobile-menu");
const categoryDropdown = document.querySelector(".drop-down-icon");
const categoryCollapse = document.querySelector(".collapse-icon");
const dropDownItems = document.querySelector(".drop-down-items");

// opening the search bar 
openSearchBar.addEventListener("click", ()=> {
    navMenuItems.classList.add("active");
    searchBar.classList.remove("active");
});

// closing the search bar 
closeSearchBar.addEventListener("click", ()=> {
    searchBar.classList.add("active");
    navMenuItems.classList.remove("active");
});

// opening the menu dropdown 
menuIcon.addEventListener("click", ()=> {
    navMenuItems.classList.add("active");
    mobileMenu.classList.remove("active");
});

// closing the menu dropdown
closeMobileMenu.addEventListener("click", ()=> {
    mobileMenu.classList.add("active");
    navMenuItems.classList.remove("active");
});

// opening the category dropdown 
categoryDropdown.addEventListener("click", ()=> {
    categoryDropdown.classList.add("active");
    categoryCollapse.classList.remove("active");
    dropDownItems.classList.remove("active");
});

// closing the category dropdown 
categoryCollapse.addEventListener("click", ()=> {
    categoryCollapse.classList.add("active");
    categoryDropdown.classList.remove("active");
    dropDownItems.classList.add("active");
});



// script for the top container carousel section 
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const slideContainerEl = document.querySelector(".slider");
const slides = document.querySelectorAll(".carousel-slides");

let currentSlide = 1
let timeout;

nextEl.addEventListener("click", ()=>{
    currentSlide++;
    clearTimeout(timeout);
    updateSlide();
});

prevEl.addEventListener("click", ()=>{
    currentSlide--;
    clearTimeout(timeout);
    updateSlide();
})


function updateSlide(){
    if (currentSlide > slides.length) {
        currentSlide = 1
    }else if (currentSlide < 1) {
        currentSlide = slides.length;
    }
    slideContainerEl.style.transform = `translateX(-${(currentSlide -1) * 25.813}rem)`

    timeout = setTimeout(() => {
        currentSlide++;
        updateSlide();
    }, 3000);

}

// script for the review section 

const reviewSlide = document.querySelector(".review-carousel");
const testimonies = document.querySelectorAll(".testimony-1");

let slide = 1;
// let time;

function Slideroll(){
    if (slide > testimonies.length) {
        slide = 1
    }else if (slide < 1) {
        slide = testimonies.length;
    }
    reviewSlide.style.transform = `translateX(-${(slide -1) * 20.4}rem)`

    timeout = setTimeout(() => {
        slide++;
        Slideroll();
    }, 3000);

}

Slideroll();


