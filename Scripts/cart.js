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


// script for the item count 
const itemCount = document.getElementById("item-count");
const countContainer = document.querySelector(".orders")

let itemCounter = countContainer.children.length;

itemCount.innerHTML = itemCounter;



















// create cart items 
// const cartContainer = document.querySelector(".orders");

// let newImgSrc = JSON.parse(localStorage.getItem("imageSrc"));
// let itemName = JSON.parse(localStorage.getItem("itemName"));
// let itemPrice = JSON.parse(localStorage.getItem("itemPrice"));

// if (itemName === ) {
    
// } else {
    
// }

// function creatCartItem() {
//     const orderContainer = document.createElement("div");
//     orderContainer.classList.add("order-container");
//     cartContainer.appendChild(orderContainer);

//     const cartItemImg = document.createElement("img");
//     cartItemImg.src = newImgSrc;
//     cartItemImg.classList.add("item-image");
//     orderContainer.appendChild(cartItemImg);

//     const orderDetails = document.createElement("div");
//     orderDetails.classList.add("order-details");
//     orderContainer.appendChild(orderDetails);

//     const productName = document.createElement("p")
//     productName.innerHTML = itemName;
//     orderDetails.appendChild(productName);

//     const smallEl = document.createElement("small");
//     const smallText = document.createTextNode("Price set: #");
//     const smallSpan = document.createElement("span");
//     const priceValueText = document.createTextNode(itemPrice);
//     smallSpan.textContent = priceValueText.textContent;
//     smallEl.appendChild(smallText);
//     smallEl.appendChild(smallSpan);
//     orderDetails.appendChild(smallEl);

//     const removeAndQty = document.createElement("div");
//     removeAndQty.classList.add("remove-and-qty");
//     orderDetails.appendChild(removeAndQty);

//     const delIcon = document.createElement("img")
//     delIcon.src = "Assets/Icons/delete.png";
//     removeAndQty.appendChild(delIcon);
    
//     const removeP = document.createElement("p");
//     removeP.innerHTML = "REMOVE";
//     removeAndQty.appendChild(removeP);

//     const reduceBtn = document.createElement("button");
//     reduceBtn.classList.add("reduce-btn");
//     reduceBtn.innerHTML = "-";
//     removeAndQty.appendChild(reduceBtn);

//     const qtyDisplay = document.createElement("input");
//     qtyDisplay.setAttribute("type","text");
//     qtyDisplay.setAttribute("readonly", true);
//     removeAndQty.appendChild(qtyDisplay);

//     const increaseBtn = document.createElement("button");
//     reduceBtn.classList.add("increase-btn");
//     reduceBtn.innerHTML = "+";
//     removeAndQty.appendChild(increaseBtn);   
// }