// variables for the carousel section 
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