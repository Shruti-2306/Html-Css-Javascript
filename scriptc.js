// JavaScript functionality for the e-commerce website

// Sample data for products
const products = [
    {
        id: 1,
        name: "Vanilla Ice Cream",
        price: 5.99,
        image: "product1.jpg",
        description: "Classic vanilla ice cream made with real vanilla beans."
    },
    {
        id: 2,
        name: "Strawberry Ice Cream",
        price: 6.99,
        image: "product2.jpg",
        description: "Rich and creamy chocolate ice cream for chocolate lovers."
    },
    {
        id: 3,
        name: "Chocolate Ice Cream",
        price: 6.99,
        image: "product3.jpg",
        description: "Rich and creamy chocolate ice cream for chocolate lovers."
    },
    // Add more products as needed
    
];

// Function to display products on the shop page
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    let productHTML = '';

    products.forEach(product => {
        productHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });

    productsContainer.innerHTML = productHTML;
}

// Function to add a product to the shopping cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to the cart!`);
}

// Function to remove a product from the shopping cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    let cartHTML = '';
    let totalCost = 0;

    cartItems.forEach((item, index) => {
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
        totalCost += item.price;
    });

    cartContainer.innerHTML = cartHTML;

    // Display total cost
    const totalCostElement = document.querySelector('.total-cost');
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}
// Function to handle redirection to the payment link
function proceedToBuy() {
    // Replace 'payment-link' with the actual URL of your payment page
    window.location.href = 'https://www.paypal.com/checkout ';
}


// Display products when the shop page loads
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.products')) {
        displayProducts();
    }

    if (document.querySelector('.cart-items')) {
        updateCartDisplay();
    }
});
