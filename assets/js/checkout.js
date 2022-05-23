//  FUNCTION TO ADD QUANTITY VALUE
const addButtons = document.querySelectorAll(".addOrderQuantity");
for(let i = 0; i < addButtons.length; i++){
    const addButton = addButtons[i];
    addButton.addEventListener("click", function(){
        const quantity = document.querySelectorAll(".quantityOrderAmount")[0];
        quantity.value ++;
        computeTotal()
    })
}

//  FUNCTION TO REMOVE QUANTITY VALUE
const removeButtons = document.querySelectorAll(".removeOrderQuantity");
for(let i = 0; i < removeButtons.length; i++){
    const removeButton = removeButtons[i];
    removeButton.addEventListener("click", function(){
        const quantity = document.querySelectorAll(".quantityOrderAmount")[0];
        quantity.value --;
        computeTotal()
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
        
        computeTotal();
    }
}

const quantityInput = document.querySelectorAll(".quantityOrderAmount");
for(let i =0; i < quantityInput.length; i++){
    const input = quantityInput[i];
    input.addEventListener("change", onQuantityChange)
}

// FUNTION TO CALCULATE THE TOTAL
const computeTotal = () => {
    const orderContainer = document.getElementsByClassName("orderInfoContainer")[0];
    const orderRows =  orderContainer.getElementsByClassName("order");
    let total = 0;
    for(let i = 0; i < orderRows.length; i++){
       const orderRow = orderRows[i];
       const priceElement = orderRow.getElementsByClassName("singleOrderPrice")[0];
       const quantityElement = orderRow.getElementsByClassName("quantityOrderAmount")[0];
       const price = parseFloat(priceElement.innerHTML.replace("Ksh", ""));
       const quantity = quantityElement.value;
       
       total = total + ( price * quantity)
    }
    document.querySelector(".subtotal").innerHTML = "Ksh" + total
}





