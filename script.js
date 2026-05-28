'use strict';

//Nutrition Modal Buttons
const nutritionBtns = document.querySelectorAll('.nutrition-button');
const nutritionModal = document.querySelector('.nutrition-modal');
const nutritionCloseBtns = document.querySelectorAll('.close-button');

//Elements for overlay and no-scroll
const bodyElm = document.querySelector('body');
const overlay = document.querySelector('.overlay');

//Purchase Modal Buttons
const purchaseBtn = document.querySelector('.cart-button');
const purchaseModal = document.querySelector('.purchase-modal');
const purchaseCloseBtn = document.querySelector('.purchase-close-button');

//Add to cart button
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const quantityAmt = document.getElementById('quantity');
const addToCartBtn = document.querySelector('.add-order-btn');
const amountTitle = document.querySelector('.pp-amount');

//Cart Elements 
const cartAmt = document.querySelector('.cart-amount');
const clearCartBtn = document.querySelector('.clearCart');

//Purchase quantity limit message
const limitMes = document.querySelector('.limitMessage');

//Form Buttons
const customerFormBtn = document.getElementById('customer');
const customerForm = document.querySelector('.form-section');
const businessFormBtn = document.getElementById('business');
const businessForm = document.querySelector('.business-form-section');
const formBtn = document.querySelector('.form-button');

customerFormBtn.addEventListener('click', () => {
    customerForm.classList.remove('hidden');
    businessForm.classList.add('hidden');
    customerFormBtn.classList.add('active');
    businessFormBtn.classList.remove('active');
});

businessFormBtn.addEventListener('click', () => {
    customerForm.classList.add('hidden');
    businessForm.classList.remove('hidden');
    businessFormBtn.classList.add('active');
    customerFormBtn.classList.remove('active');
});

//product Prices
const price = 9.99;

//User quantity in cart
let tempQty = 1;
let totalQty = 0;

//Clears cart amount and resets it to zero and hides the number by the cart
clearCartBtn.addEventListener("click", () => {
    totalQty = 0;
    tempQty = 1;
    cartAmt.classList.add('hidden');
    cartAmt.textContent = 0;
});

//Add button in the quantity modal
addBtn.addEventListener('click', () => {
    let addVar = Number(quantityAmt.value);
    console.log(`Current add var: ${addVar, typeof addVar}`);

    //Prevents users from adding more than the maximum amount
    if (tempQty >= 10) {
        alert(`You cannot add more`);
        return;
    } 

    addVar++;
    tempQty = addVar;
    console.log(`New amount is: ${tempQty}, ${typeof tempQty}`);
    quantityAmt.value = tempQty;
    amountTitle.innerHTML = (tempQty * 9.99);
});

//Subtract button in the quantity modal
subtractBtn.addEventListener('click', () => {
    let subVar = Number(quantityAmt.value);
    console.log(`Current add var: ${subVar}, ${typeof subVar}`);

    //Prevents users from subtracting more than the minimum amount
    if (subVar <= 1) {
        alert(`You cannot subtract more`);
        return;
    }

    subVar--;
    tempQty = subVar;
    console.log(`The subVar is: ${subVar}`);
    quantityAmt.value = tempQty;
    amountTitle.innerHTML = (tempQty * 9.99);
});

//Display quantity by cart
addToCartBtn.addEventListener('click', () => {
    console.log(`Temp Qty is: ${tempQty}`);
    //Prevents users from adding more than the maximum amount
    if (totalQty >= 10 || tempQty >= 10) {
        alert(`You cannot add more`);
        purchaseModal.classList.add('hidden');
        overlay.classList.add('hidden');
        bodyElm.classList.remove('no-scroll');
        return;
    } 

    let numQty = Number(tempQty);
    totalQty += numQty;
    
    console.log(`New Total is: ${totalQty}`);
    cartAmt.classList.remove('hidden');
    cartAmt.innerHTML = totalQty;
    purchaseModal.classList.add('hidden');
    overlay.classList.add('hidden');
    bodyElm.classList.remove('no-scroll');
    quantityAmt.value = "1";
    amountTitle.innerHTML = "9.99";
    
    // tempQty = 1;

    // console.log(`Current value is: ${totalQty}`);
    // let userQty = quantityAmt.valueAsNumber;
    // console.log(`User value is: ${userQty}`);
    
    // if (userQty > 10) {
    //     alert('Quantity entered exceeds customer limit');
    //     return;
    // } else if (totalQty >= 10) {
    //     purchaseModal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    //     bodyElm.classList.remove('no-scroll');
    //     quantityAmt.value = "";
    //     setTimeout(() => {
    //       limitMes.style.visibility = 'visible';

    //       setTimeout(() => {
    //         limitMes.style.visibility = 'hidden';
    //       }, 3000); // disappears after 3s
    //     }, 1000);
    //     return;
    // } else if(totalQty < 10) {
    //     totalQty = totalQty + userQty;
        
    // }
    
});

//Open nutrition modal on each product card
nutritionBtns.forEach(nutritionBtn => {
    nutritionBtn.addEventListener("click", () => {
        nutritionModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        bodyElm.classList.add("no-scroll");
    });
});

//Close nutrition card on each product card
nutritionCloseBtns.forEach(nutritionCloseBtn => {
    nutritionCloseBtn.addEventListener('click', () => {
        nutritionModal.classList.add('hidden');
        overlay.classList.add('hidden');
        bodyElm.classList.remove('no-scroll');
    });
});

//Open purchase modal when purchase modal is clicked
purchaseBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    bodyElm.classList.add("no-scroll");
    purchaseModal.classList.remove('hidden');
});

//Close purchase modal when close icon is clicked
purchaseCloseBtn.addEventListener('click', () => {
    purchaseModal.classList.add('hidden');
    overlay.classList.add('hidden');
    bodyElm.classList.remove('no-scroll');
});

