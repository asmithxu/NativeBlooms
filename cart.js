document.addEventListener("DOMContentLoaded", function() {
    renderCartItems();
    const buttons = document.querySelectorAll('.add-to-cart');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].remove();
      }
});

function getStorageItems(plantss) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(plantss);
    return cartItems
}

let newArray = getStorageItems()

function calculateTotal(array1) {
let subtotalHTML = document.getElementById("subtotal")
let totalPrice = 0
for (let i = 0; i < (array1.length -1); i++) {
    totalPrice += array1[i].cost
}

subtotalHTML.innerText = "$" + Math.round(totalPrice * 100) / 100

}

calculateTotal(newArray)

console.log(newArray[1].cost + newArray[0].cost)

let clearCartHTML = document.getElementById("clear-cart")

clearCartHTML.addEventListener("click", function(){
    localStorage.removeItem('cartItems')
    location.reload()
})