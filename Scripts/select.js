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


// script for selected item 

const displayImage = document.getElementById("item-image");
const displayName = document.getElementById("item-name");
const displayPrice= document.getElementById("item-price")

let newImgSrc = JSON.parse(localStorage.getItem("imageSrc"));
let itemName = JSON.parse(localStorage.getItem("itemName"));
let itemPrice = JSON.parse(localStorage.getItem("itemPrice"));

displayImage.src = newImgSrc;
displayName.innerHTML = itemName;
displayPrice.innerHTML = itemPrice;

// script for the size button 

const btnsForSizes = document.querySelectorAll(".btn-sizes");
const btnColors = document.querySelectorAll(".btn-color");
const colorSelect = document.querySelectorAll(".color-select");

// select size 
btnsForSizes[0].addEventListener("click", ()=>{
    btnsForSizes[0].classList.add("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.remove("active")
});
btnsForSizes[1].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.add("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.remove("active")
});
btnsForSizes[2].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.add("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.remove("active")
});
btnsForSizes[3].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.add("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.remove("active")
});

btnsForSizes[4].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.add("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.remove("active")
});
btnsForSizes[5].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.add("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.remove("active")
});
btnsForSizes[6].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.add("active")
    btnsForSizes[7].classList.remove("active")
});
btnsForSizes[7].addEventListener("click", ()=>{
    btnsForSizes[0].classList.remove("active")
    btnsForSizes[1].classList.remove("active")
    btnsForSizes[2].classList.remove("active")
    btnsForSizes[3].classList.remove("active")
    btnsForSizes[4].classList.remove("active")
    btnsForSizes[5].classList.remove("active")
    btnsForSizes[6].classList.remove("active")
    btnsForSizes[7].classList.add("active")
});

// select color 
btnColors[0].addEventListener("click", ()=>{
    colorSelect[0].classList.remove("active");
    colorSelect[1].classList.add("active");
    colorSelect[2].classList.add("active");
    colorSelect[3].classList.add("active");
    colorSelect[4].classList.add("active");
});
btnColors[1].addEventListener("click", ()=>{
    colorSelect[0].classList.add("active");
    colorSelect[1].classList.remove("active");
    colorSelect[2].classList.add("active");
    colorSelect[3].classList.add("active");
    colorSelect[4].classList.add("active");
});
btnColors[2].addEventListener("click", ()=>{
    colorSelect[0].classList.add("active");
    colorSelect[1].classList.add("active");
    colorSelect[2].classList.remove("active");
    colorSelect[3].classList.add("active");
    colorSelect[4].classList.add("active");
});
btnColors[3].addEventListener("click", ()=>{
    colorSelect[0].classList.add("active");
    colorSelect[1].classList.add("active");
    colorSelect[2].classList.add("active");
    colorSelect[3].classList.remove("active");
    colorSelect[4].classList.add("active");
});
btnColors[4].addEventListener("click", ()=>{
    colorSelect[0].classList.add("active");
    colorSelect[1].classList.add("active");
    colorSelect[2].classList.add("active");
    colorSelect[3].classList.add("active");
    colorSelect[4].classList.remove("active");
});





// btnsForSizes.forEach((btnForSize) =>{
//     btnForSize.addEventListener("click", ()=> {
//         btnForSize.classList.add("active")
//     })
// })