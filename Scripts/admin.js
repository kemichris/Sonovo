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
const productClicked = document.querySelector(".product-clicked");
const addItemProduct = document.querySelector(".add-item-product");
const ordersPage = document.querySelector(".orders-page");
const addItemOrders = document.querySelector(".add-item-orders");
const customersPage = document.querySelector(".customers-page");
const cutomerClicked = document.querySelector(".customer-clicked");


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


/////////////PAGES SWITCHING SECTIONS //////////////
dashboard.addEventListener("click", ()=> {
    clickDashboard();
});

product.addEventListener("click", ()=> {
    clickProduct();
});

orders.addEventListener("click", ()=> {
    clickOrders();
});

customers.addEventListener("click", ()=> {
    clickCustomers();
});


/////////////ITEM CLICKED ON PRODUCT PAGE //////////////
const productRows = document.querySelectorAll(".product-row");
const productClickedBack = document.getElementById("product-back")

productRows.forEach((productRow)=> {
    productRow.addEventListener("click", ()=> {
        productPage.classList.add("active");
        productClicked.classList.remove("active");

    });
});

productClickedBack.addEventListener("click", ()=> {
        productClicked.classList.add("active");
        productPage.classList.remove("active");
})

///////////// ADD NEW PRODUCT PAGE//////////////
const addProductPageBtn = document.getElementById("add-new-product");
const cancleAddProduct = document.getElementById("cancle-product");

addProductPageBtn.addEventListener("click", ()=> {
    productPage.classList.add("active");
    addItemProduct.classList.remove("active")
});

cancleAddProduct.addEventListener("click", ()=> {
    addItemProduct.classList.add("active")
    productPage.classList.remove("active");
});



/////////////ADD ITEM ON ORDER PAGE //////////////
const addOrderPageBtn = document.getElementById("add-item-order-btn");
const cancleAddOrder = document.getElementById("cancle-order-btn");

addOrderPageBtn.addEventListener("click", ()=> {
    ordersPage.classList.add("active");
    addItemOrders.classList.remove("active")
});

cancleAddOrder.addEventListener("click", ()=> {
    addItemOrders.classList.add("active");
    ordersPage.classList.remove("active");
});


/////////////ITEM CLICKED ON CUSTOMER PAGE //////////////
const customerRows = document.querySelectorAll(".cutomer-row");
const customerClickedCancle = document.getElementById("cancle-customer-btn");

customerRows.forEach((customerRow)=> {
    customerRow.addEventListener("click", ()=> {
        customersPage.classList.add("active");
        cutomerClicked.classList.remove("active");

    });
});

customerClickedCancle.addEventListener("click", ()=> {
        cutomerClicked.classList.add("active");
        customersPage.classList.remove("active");
});

////////////////// DELETE ICON POP UP//////////////
const delIcons = document.querySelectorAll(".del-icon");
const popUpAlert = document.getElementById("popup-alert");

delIcons.forEach((delicon)=> {
    delicon.addEventListener("click", ()=> {
        popUpAlert.classList.remove("active");
    })
})




///////// FUNCTIONS FOR PAGES SWITCH ///////////
function clickDashboard() {
    // menu switches and colors 
    product.classList.remove("active");
    dashboard.classList.add("active");
    orders.classList.remove("active");
    customers.classList.remove("active");
    setting.classList.remove("active");
    //
    productP.classList.remove("active");
    dashboardP.classList.add("active");
    ordersP.classList.remove("active");
    customersP.classList.remove("active");
    settingP.classList.remove("active");
    //
    dashboardImg.classList.remove("active")
    productImg.classList.remove("active");
    ordersImg.classList.remove("active");
    customersImg.classList.remove("active");
    settingImg.classList.remove("active");

    // pages switches 
    pageHeading.innerHTML = "Dashboard";
    productPage.classList.add("active");
    ordersPage.classList.add("active");
    customersPage.classList.add("active");
    analyticsPage.classList.remove("active");
    productClicked.classList.add("active");
    addItemProduct.classList.add("active");
    addItemOrders.classList.add("active");
    cutomerClicked.classList.add("active");
}

function clickProduct() {
    // menu switches and colors 
    product.classList.add("active");
    dashboard.classList.remove("active");
    orders.classList.remove("active");
    customers.classList.remove("active");
    setting.classList.remove("active");
    //
    productP.classList.add("active");
    dashboardP.classList.remove("active");
    ordersP.classList.remove("active");
    customersP.classList.remove("active");
    settingP.classList.remove("active");
    //
    dashboardImg.classList.add("active")
    productImg.classList.add("active");
    ordersImg.classList.remove("active");
    customersImg.classList.remove("active");
    settingImg.classList.remove("active");

    // pages switches 
    pageHeading.innerHTML = "PRODUCTS";
    analyticsPage.classList.add("active");
    ordersPage.classList.add("active");
    customersPage.classList.add("active");
    productPage.classList.remove("active");
    productClicked.classList.add("active");
    addItemProduct.classList.add("active");
    addItemOrders.classList.add("active");
    cutomerClicked.classList.add("active");
}

function clickOrders() {
    // menu switches and colors 
    product.classList.remove("active");
    dashboard.classList.remove("active");
    orders.classList.add("active");
    customers.classList.remove("active");
    setting.classList.remove("active");
    //
    productP.classList.remove("active");
    dashboardP.classList.remove("active");
    ordersP.classList.add("active");
    customersP.classList.remove("active");
    settingP.classList.remove("active");
    //
    dashboardImg.classList.add("active")
    productImg.classList.remove("active");
    ordersImg.classList.add("active");
    customersImg.classList.remove("active");
    settingImg.classList.remove("active");

    // pages switches 
    pageHeading.innerHTML = "ORDERS";
    analyticsPage.classList.add("active");
    productPage.classList.add("active");
    customersPage.classList.add("active");
    ordersPage.classList.remove("active");
    productClicked.classList.add("active");
    addItemProduct.classList.add("active");
    addItemOrders.classList.add("active");
    cutomerClicked.classList.add("active");
}

function clickCustomers() {
    // menu switches and colors 
    product.classList.remove("active");
    dashboard.classList.remove("active");
    orders.classList.remove("active");
    customers.classList.add("active");
    setting.classList.remove("active");
    //
    productP.classList.remove("active");
    dashboardP.classList.remove("active");
    ordersP.classList.remove("active");
    customersP.classList.add("active");
    settingP.classList.remove("active");
    //
    dashboardImg.classList.add("active")
    productImg.classList.remove("active");
    ordersImg.classList.remove("active");
    customersImg.classList.add("active");
    settingImg.classList.remove("active");

    // pages switches 
    pageHeading.innerHTML = "CUSTOMERS";
    analyticsPage.classList.add("active");
    productPage.classList.add("active");
    ordersPage.classList.add("active");
    customersPage.classList.remove("active");
    productClicked.classList.add("active");
    addItemProduct.classList.add("active");
    addItemOrders.classList.add("active");
    cutomerClicked.classList.add("active");
}