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

// script for the delivery switch 

const deliverySwitch = document.querySelector(".delivery");
const shippingSwitch = document.querySelector(".shipping");
const country = document.querySelector(".country");
const state = document.querySelector(".state");


deliverySwitch.addEventListener("click", ()=> {
    shippingSwitch.classList.remove("active");
    deliverySwitch.classList.add("active");
    country.classList.add("active");
    state.classList.remove("active");
});

shippingSwitch.addEventListener("click", ()=> {
    deliverySwitch.classList.remove("active");
    shippingSwitch.classList.add("active");
    state.classList.add("active");
    country.classList.remove("active");
});


// Delivery fee section 
const residenceAddress = document.getElementById("residence-address");
const homeCheck = document.querySelector(".home-check");

homeCheck.addEventListener("click", ()=> {
    if (homeCheck.checked) {
        residenceAddress.classList.remove("active");
        
    } else {
        residenceAddress.classList.add("active");
    }

})

