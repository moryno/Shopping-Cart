// fetch("./assets/js/data.json")
//   .then(response => response.json())
//   .then(data => appendData(data))
//   .catch(err => console.log(err))

// const appendData = (data) => {
//     const mainContainer = document.getElementById("cartContainer")
//     data.forEach((item) => {
//         const cartEvent = document.createElement("div")
//         cartEvent.innerHTML = "Title: " + item.title;
//         mainContainer.append(cartEvent)
//     })
   
// }

// ADD CAROUSEL TO THE SLIDER ITEMS
const sliderContainer = document.querySelector(".sliderWrapper");
const singleSlides = Array.from(sliderContainer.children);
const nextButton = document.querySelector(".arrowRight");
const prevButton = document.querySelector(".arrowLeft");
const slideWidth = singleSlides[0].getBoundingClientRect().width;

// 1. Arrange slide next to one another
const setSlidePosition = (singleSlide, i) => {
    singleSlide.style.left = slideWidth * i + "px"      
}
singleSlides.forEach(setSlidePosition)

// 2. A function to move slides to the left or right
const sliderMove = (sliderContainer, currentSlide, targetSlide) => {
    sliderContainer.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove("currentSlide");
    targetSlide.classList.add("currentSlide");
}

// move right
nextButton.addEventListener("click", function(){
    const currentSlide = sliderContainer.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;
    
    sliderMove(sliderContainer, currentSlide, nextSlide)
})

// // move left
prevButton.addEventListener("click", function(){
    const currentSlide = sliderContainer.querySelector(".currentSlide");
    const prevSlide = currentSlide.previousElementSibling;
    sliderMove(sliderContainer, currentSlide, prevSlide)
})