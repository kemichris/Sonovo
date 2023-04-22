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