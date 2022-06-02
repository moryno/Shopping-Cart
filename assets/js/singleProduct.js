window.addEventListener("load", () =>{
    const productTitle = localStorage.getItem("PRODUCTTITLE");
    const productPrice = localStorage.getItem("PRODUCTPRICE");
    const productImg = localStorage.getItem("PRODUCTIMAGE");
    const productDesc = localStorage.getItem("PRODUCTDESC");

    loadSingleProduct(productTitle, productDesc, productImg, productPrice);

    
        //  FUNCTION TO ADD QUANTITY VALUE
    const addButtons = document.querySelectorAll(".addQuantity");
    for(let i = 0; i < addButtons.length; i++){
        const addButton = addButtons[i];
        addButton.addEventListener("click", function(){
            const quantity = document.querySelectorAll(".quantityAmount")[0];
            quantity.value ++;
            
        })
    }

    //  FUNCTION TO REMOVE QUANTITY VALUE
    const removeButtons = document.querySelectorAll(".removeQuantity");
    for(let i = 0; i < removeButtons.length; i++){
        const removeButton = removeButtons[i];
        removeButton.addEventListener("click", function(){
            const quantity = document.querySelectorAll(".quantityAmount")[0];
            quantity.value --;
        
        })
    }

    //  CHECK IF INPUT VALUE HAS CHANGED
    const onQuantityChange = (event) => {
        const input = event.target;
        if(isNaN(input.value) || (input.value <= 0)){
            input.value = 1    
            return;
        
        }
        else{
            
            
        }
    }

    const quantityInput = document.querySelectorAll(".quantityAmount");
    for(let i =0; i < quantityInput.length; i++){
        const input = quantityInput[i];
        input.addEventListener("change", onQuantityChange)
    }

    // FUNCTION TO ADD ITEM TO CART
    const addToCart = (event) =>{
    let cart = 0;
    const addButton = event.target;
    const singleProductParent = addButton.parentElement.parentElement.parentElement;
    const imageSrc = singleProductParent.querySelector("img").src;
    const title = singleProductParent.querySelector(".singleTitle").innerHTML;
    const price = singleProductParent.querySelector(".singlePrice").innerHTML;
    const quantity = singleProductParent.querySelector(".quantityAmount").value;
    localStorage.setItem("TITLE", title);
    localStorage.setItem("PRICE", price);
    localStorage.setItem("QUANTITY", quantity);
    localStorage.setItem("IMAGESRC", imageSrc);
    document.querySelector(".cartItem").innerHTML = (cart + 1);
    }

    const addButton = document.querySelector(".singleAddToCart");
    addButton.addEventListener("click", addToCart)












})



// FUNCTION TO POPULATE THE SINGLE PRODUCT PAGE
const loadSingleProduct = (productTitle, productDesc, productImg, productPrice) => {
    const parentSection = document.querySelector("#singleProduct");
    const singleContainer = document.createElement("div");
    singleContainer.classList.add("singleContainer");
    const singleProductContent = `
        <div class="singleImgContainer">
            <img src="${productImg}" />
        </div>
        <div class="singleInfoContainer">
            <h2 class="singleTitle">${productTitle}</h2>
            <p class="singleDesc">
            ${productDesc}
            </p>
            <h2 class="singlePrice">${productPrice}</h2>
            <div class="singlePageQuantity">
            <div class="singleAmount">
                <button class="removeQuantity" type="submit">-</button>
                <input class="quantityAmount" value="1" />
                <button class="addQuantity" type="submit">+</button>
            </div>
            <button class="singleAddToCart" type="submit">ADD TO CART</button>
            </div>
        </div>
    `;
    singleContainer.innerHTML = singleProductContent;
    parentSection.append(singleContainer);
}
// FUNCTION TO REDIRECT TO CHECKOUT
const cartButton = document.querySelector(".fa-shopping-cart");
cartButton.addEventListener("click", function(){
    window.location.href = "../pages/checkout.html"
})