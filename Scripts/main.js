// script for the nav bar 
const menuIcon = document.getElementById("nav-icon");
const navMenuItems = document.getElementById("nav-menu-items");
const closeMobileMenu = document.getElementById("menu-close");
const closeSearchBar = document.getElementById("close-search-bar");
const openSearchBar = document.getElementById("open-search-bar");
const desktopMenuClose = document.getElementById("desktop-menu-close");
const desktopSearchBar = document.querySelector(".desktop-search-bar");
const deskSearchClose = document.getElementById("desktop-menu-close");
const searchBar = document.querySelector(".search-bar");
const mobileMenu = document.querySelector(".mobile-menu");
const categoryDropdown = document.querySelector(".drop-down-icon");
const categoryCollapse = document.querySelector(".collapse-icon");
const dropDownItems = document.querySelector(".drop-down-items");
const desktopCategoryDropdown = document.querySelector(".desktop-category-dropdown");
const desktopCategory = document.getElementById("desktop-category");

const menDropdown = document.querySelector(".men-dropdown");
const womenDropdown = document.querySelector(".women-dropdown");
const childrenDropdown = document.querySelector(".children-dropdown");
const men = document.querySelector(".men");
const women = document.querySelector(".women");
const children = document.querySelector(".children");


// desktop category dropdown 
desktopCategory.addEventListener("click", ()=> {  
    desktopCategoryDropdown.classList.toggle("active");
})

// opening the desktop search bar 
openSearchBar.addEventListener("click", ()=> {
    desktopSearchBar.classList.remove("active");
});

// closing the desktop search bar
deskSearchClose.addEventListener("click", ()=> {
    desktopSearchBar.classList.add("active");
});

// opening the mobile search bar 
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

// dorpdown for the gender category 
men.addEventListener("click", ()=> {
    menDropdown.classList.toggle("active");
    womenDropdown.classList.add("active");
    childrenDropdown.classList.add("active");
});
women.addEventListener("click", ()=> {
    womenDropdown.classList.toggle("active");
    menDropdown.classList.add("active");
    childrenDropdown.classList.add("active");
});
children.addEventListener("click", ()=> {
    childrenDropdown.classList.toggle("active");
    menDropdown.classList.add("active");
    womenDropdown.classList.add("active");
});



// script for the review section 

const reviewSlide = document.querySelector(".review-carousel");
const testimonies = document.querySelectorAll(".testimony-1");

let slide = 1;
// let time;

function Slideroll(){
    if (screen.width <= 500 ) {
        if (slide > testimonies.length) {
            slide = 1
        }else if (slide < 1) {
            slide = testimonies.length;
        }
        reviewSlide.style.transform = `translateX(-${(slide -1) * 21.5}rem)`
    
        timeout = setTimeout(() => {
            slide++;
            Slideroll();
        }, 3000);
    }
    
}

Slideroll();

// script for the items
const itemsImages = document.querySelectorAll(".items-images")

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


