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

// script for the items
const itemsImages = document.querySelectorAll(".items-images")
// const sud96Img = document.getElementById("sud96");
// const sc30Img = document.getElementById("sc30")
// const sc

let imgSrc = "";
let nameOfItem = "";
let priceOfItem = 0;


itemsImages[0].addEventListener("click", ()=> {
    sendToSelect(itemsImages[0], "SONOVO SUD96 CORD FIT", 17000)
});
itemsImages[1].addEventListener("click", ()=> {
    sendToSelect(itemsImages[1], "SONOVO SC30 Combat baggy pants", 10000)
});
itemsImages[2].addEventListener("click", ()=> {
    sendToSelect(itemsImages[2], "SONOVO SC28 Pant", 12000)
});
itemsImages[3].addEventListener("click", ()=> {
    sendToSelect(itemsImages[3], "SONOVO MSC03 Black pant", 10000)
});
itemsImages[4].addEventListener("click", ()=> {
    sendToSelect(itemsImages[4], "SONOVO J001 Jacket and VB Combat", 19000)
});
itemsImages[5].addEventListener("click", ()=> {
    sendToSelect(itemsImages[5], "SONOVO SUD98 set", 16000)
});
itemsImages[6].addEventListener("click", ()=> {
    sendToSelect(itemsImages[6], "SONOVO SUD14 set", 16000)
});
itemsImages[7].addEventListener("click", ()=> {
    sendToSelect(itemsImages[7], "SONOVO SC34 Cargo pant", 12000)
});
itemsImages[8].addEventListener("click", ()=> {
    sendToSelect(itemsImages[8], "SONOVO oversized Green Combat", 10000)
});
itemsImages[9].addEventListener("click", ()=> {
    sendToSelect(itemsImages[9], "SONOVO SC02 Pant", 10000)
});



// fuction to send item to the select page 

function sendToSelect(itemImg, itemName, itemPrice) {
    imgSrc = itemImg.src;
    nameOfItem = itemName;
    priceOfItem = itemPrice;
    updateLocalStorage();
}

// function to set items to localStorage 

function updateLocalStorage() {
    localStorage.setItem("imageSrc", JSON.stringify(imgSrc));
    localStorage.setItem("itemName", JSON.stringify(nameOfItem));
    localStorage.setItem("itemPrice", JSON.stringify(priceOfItem));
}


