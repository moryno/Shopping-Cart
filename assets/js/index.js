window.addEventListener("load", () => {
  // FUNCTION TO SEND DETAILS OF ITEM CHOSEN TO SINGLE PAGE
const addDetails = (event) => {
  const productDetail = event.target;
  const productParent = productDetail.parentElement;
  const productTitle = productParent.querySelector(".productTitle").innerHTML;
  const productImg = productParent.querySelector(".productImg").src;;
  const productPrice = productParent.querySelector(".price").innerHTML;
  const productDesc = productParent.querySelector(".productDesc").innerHTML;

  localStorage.setItem("PRODUCTIMAGE", productImg) 
  localStorage.setItem("PRODUCTTITLE", productTitle); 
  localStorage.setItem("PRODUCTPRICE", productPrice);
  localStorage.setItem("PRODUCTDESC", productDesc);
  window.location.href = "./assets/pages/singleProduct.html"
 }
 
 
 const productDetails = document.querySelectorAll(".productInfoContainer");
 productDetails.forEach((productDetail) => {
   productDetail.addEventListener("click", addDetails)
   
 })
 


})


fetch("./assets/js/data.json")
  .then(response => response.json())
  .then(data => appendData(data))
  .catch(err => console.log(err))

const appendData = (data) => {
    const mainContainer = document.querySelector(".productContainer")
    data.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.classList.add("productCard");
        const productContent = `
        <div class="productCircle"></div>
        <img class="productImg" src="${item.img}" alt="" />
        <div class="productDetail">
          <h3 class="productTitle">${item.title}</h3>
          <h3 class="price">Ksh${item.price}</h3>
          <p class="productDesc" style="display: none">
          ${item.desc}
          </p>
        </div>
        <div class="productInfoContainer">
          <div class="productIcon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class="productIcon">
            <i class="fas fa-heart"></i>
          </div>
          <div class="productIcon">
            <i class="fas fa-search"></i>
          </div>
        </div>
        `
        productCard.innerHTML = productContent
        mainContainer.append(productCard)
    })
   
}

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

// ADD BACKGROUNDCOLOR TO SLIDER
const slides = document.querySelectorAll(".slides");
slides[0].style.backgroundColor = "#f5fafd";
slides[1].style.backgroundColor = "#fcf1ed";
slides[2].style.backgroundColor = "#fbf0f4";