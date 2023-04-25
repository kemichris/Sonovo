// script for the nav bar 
const menuIcon = document.getElementById("nav-icon");
const navMenuItems = document.getElementById("nav-menu-items");
const closeMobileMenu = document.getElementById("menu-close");
const closeSearchBar = document.getElementById("close-search-bar");
const openSearchBar = document.getElementById("open-search-bar");
const searchBar = document.querySelector(".search-bar");
const mobileMenu = document.querySelector(".mobile-menu");

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