const plants = [
    {name: "Bee Balm", cost: 2.99, type: "Flower", image:"/images/beebalm.jpg"},
    {name: "Lemon Mint", cost: 2.99, type: "Flower", image:"/images/lemonmint.jpg"},
    {name: "Aster", cost: 2.99, type: "Flower", image:"/images/aster.jpg"},
    {name: "Sunburst", cost: 2.99, type: "Flower", image:"/images/sunburst.jpg"},
    {name: "Virginia Bluebell", cost: 2.99, type: "Flower", image:"/images/virginiabluebell.jpg"},
    {name: "Black Huckleberries", cost: 2.99, type: "Berry", image:"/images/blackhuckleberry.jpg"},
    {name: "Blueberries", cost: 2.99, type: "Berry", image:"/images/blueberry.jpg"},
    {name: "Strawberries", cost: 2.99, type: "Berry", image:"/images/strawberry.jpg"},
]

function saveCartItemToLocalStorage(plantss) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(plantss);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function renderCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderPlants(cartItems);
}

function renderPlants(plantsToRender){
    let plantListHTML = document.getElementById('shoppingItems')
    plantListHTML.innerHTML = ' '; //Clear existing plants
    for (let i = 0; i < plantsToRender.length; i++) {
        let plant = plantsToRender[i];
        let plantHTML = document.createElement('div');
        plantHTML.className = "plant";

        let plantTitleHTML = document.createElement("h3");
        plantTitleHTML.innerText = plant.name;

        let plantImageHTML = document.createElement("div");
        plantImageHTML.innerHTML = `<img src="${plant.image}" height="150px" width="150px">`

        let plantCostHTML = document.createElement("p");
        plantCostHTML.innerText = "Price: $" + plant.cost;

        let plantTypeHTML = document.createElement("p");
        plantTypeHTML.innerText = "Type: " + plant.type;

        let addToCartButtonHTML = document.createElement("button");
        addToCartButtonHTML.className = "add-to-cart";
        addToCartButtonHTML.innerText = "Add to Cart";
        addToCartButtonHTML.addEventListener("click", function() {
           /* const cartList = document.getElementById('cart-list');
            const newCartItem = document.createElement('li');
            newCartItem.className = "cart-item"
            new */
        saveCartItemToLocalStorage(plant);
        alert("Item added to cart");

        })
        plantHTML.appendChild(plantTitleHTML);
        plantHTML.appendChild(plantImageHTML);
        plantHTML.appendChild(plantTypeHTML);
        plantHTML.appendChild(plantCostHTML);
        plantHTML.appendChild(addToCartButtonHTML);
        plantListHTML.appendChild(plantHTML);
    }
}

renderPlants(plants);