///////////// SIDE BAR MENU CONST///////////////
const dashboard = document.querySelector(".dashboard");
const product = document.querySelector(".product");
const orders = document.querySelector(".orders");
const customers = document.querySelector(".customers");
const setting = document.querySelector(".setting");

const dashboardP = document.querySelector(".dashboard-p");
const productP = document.querySelector(".product-p");
const ordersP = document.querySelector(".orders-p");
const customersP = document.querySelector(".customers-p");
const settingP = document.querySelector(".setting-p");

const dashboardImg = document.querySelector(".dashboard-img");
const productImg = document.querySelector(".product-img");
const ordersImg = document.querySelector(".orders-img");
const customersImg = document.querySelector(".customers-img");
const settingImg = document.querySelector(".setting-img");



///////////// PAGES CONST ///////////////
const pageHeading = document.getElementById("admin-heading")
const analyticsPage = document.querySelector(".analytics");
const productPage = document.querySelector(".product-page");
const productClicked = document.querySelector(".product-cliked");
const addItemProduct = document.querySelector(".add-item-product");
const ordersPage = document.querySelector(".orders-page");
const addItemOrders = document.querySelector(".add-item-orders");
const customersPage = document.querySelector("customers-page");
const cutomerClicked = document.querySelector(".customer-clicked");




dashboard.addEventListener("click", ()=> {
    product.classList.remove("active");
    dashboard.classList.add("active");
    orders.classList.remove("active");
    customers.classList.remove("active");
    setting.classList.remove("active");

    productP.classList.remove("active");
    dashboardP.classList.add("active");
    ordersP.classList.remove("active");
    customersP.classList.remove("active");
    settingP.classList.remove("active");

    dashboardImg.classList.remove("active")
    productImg.classList.remove("active");
    ordersImg.classList.remove("active");
    customersImg.classList.remove("active");
    settingImg.classList.remove("active");
});
orders.addEventListener("click", ()=> {
    product.classList.remove("active");
    dashboard.classList.remove("active");
    orders.classList.add("active");
    customers.classList.remove("active");
    setting.classList.remove("active");

    productP.classList.remove("active");
    dashboardP.classList.remove("active");
    ordersP.classList.add("active");
    customersP.classList.remove("active");
    settingP.classList.remove("active");

    dashboardImg.classList.add("active")
    productImg.classList.remove("active");
    ordersImg.classList.add("active");
    customersImg.classList.remove("active");
    settingImg.classList.remove("active");
});
customers.addEventListener("click", ()=> {
    product.classList.remove("active");
    dashboard.classList.remove("active");
    orders.classList.remove("active");
    customers.classList.add("active");
    setting.classList.remove("active");

    productP.classList.remove("active");
    dashboardP.classList.remove("active");
    ordersP.classList.remove("active");
    customersP.classList.add("active");
    settingP.classList.remove("active");

    dashboardImg.classList.add("active")
    productImg.classList.remove("active");
    ordersImg.classList.remove("active");
    customersImg.classList.add("active");
    settingImg.classList.remove("active");
});
setting.addEventListener("click", ()=> {
    product.classList.remove("active");
    dashboard.classList.remove("active");
    orders.classList.remove("active");
    customers.classList.remove("active");
    setting.classList.add("active");

    productP.classList.remove("active");
    dashboardP.classList.remove("active");
    ordersP.classList.remove("active");
    customersP.classList.remove("active");
    settingP.classList.add("active");

    dashboardImg.classList.add("active")
    productImg.classList.remove("active");
    ordersImg.classList.remove("active");
    customersImg.classList.remove("active");
    settingImg.classList.add("active");
});


///////////// SWITCHING SECTIONS //////////////
//////////// product section ///////////////
product.addEventListener("click", ()=> {
    product.classList.add("active");
    dashboard.classList.remove("active");
    orders.classList.remove("active");
    customers.classList.remove("active");
    setting.classList.remove("active");

    productP.classList.add("active");
    dashboardP.classList.remove("active");
    ordersP.classList.remove("active");
    customersP.classList.remove("active");
    settingP.classList.remove("active");

    dashboardImg.classList.add("active")
    productImg.classList.add("active");
    ordersImg.classList.remove("active");
    customersImg.classList.remove("active");
    settingImg.classList.remove("active");

    clickProduct();
});


///////// FUNCTIONS FOR PAGES SWITCH ///////////
function clickProduct() {
    pageHeading.innerHTML = "Products";
    analyticsPage.classList.add("active");
    productPage.classList.remove("active");
}

function clickOrders() {
    
}