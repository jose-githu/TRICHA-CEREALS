// script.js//

// --- 1. Centralized Product Catalog ---//
const catalog = [
{"id": 1, "name": "Maize Flour 2kg", "price": 180, "img": "https://via.placeholder.com/150?text=Maize"},
{"id": 2, "name": "Rice 2kg", "price": 250, "img": "https://via.placeholder.com/150?text=Rice"},
{"id": 3, "name": "Cooking Oil 1L", "price": 420, "img": "https://via.placeholder.com/150?text=Oil"},
{"id": 4, "name": "Ariel Detergent 500g", "price": 120, "img": "https://via.placeholder.com/150?text=Ariel"},
{"id": 5, "name": "Bar Soap", "price": 40, "img": "https://via.placeholder.com/150?text=Soap"},
{"id": 6, "name": "Body Lotion 250ml", "price": 250, "img": "https://via.placeholder.com/150?text=Lotion"},
{"id": 7, "name": "Face Cream", "price": 300, "img": "https://via.placeholder.com/150?text=Cream"},
{"id": 8, "name": "Tissue Pack", "price": 60, "img": "https://via.placeholder.com/150?text=Tissue"},
{"id": 9, "name": "Plate Set", "price": 620, "img": "https://via.placeholder.com/150?text=Plates"}
];

// --- 2. Centralized Cart Management Functions ---

/** Adds a product to the cart (localStorage) */
function addToCart(id) {
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
const item = catalog.find(x => x.id === id);
if (item) {
// Find if item already exists to increase quantity instead of duplicating
const existingItem = cart.find(x => x.id === id);
if (existingItem) {
existingItem.quantity = (existingItem.quantity || 1) + 1;
} else {
cart.push({...item, quantity: 1}); // Add quantity property
}
localStorage.setItem('cart', JSON.stringify(cart));
alert(item.name + ' added to cart!');
// Seamless: Update cart count badge if you had one
}
}

/** Removes an item instance from the cart by index */
function removeCartItem(index) {
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
cart.splice(index, 1);
localStorage.setItem('cart', JSON.stringify(cart));
// Check if the current page is cart.html and refresh the display
if (typeof loadCart === 'function') {
loadCart();
}
}

// --- 3. Utility Functions ---

/** Get a query string parameter */
function getQueryParam(name) {
const urlParams = new URLSearchParams(location.search);
return urlParams.get(name);
}

/** Function to handle payment mock (globally accessible) */
function checkoutPayment() {
window.open('payment_mock.html', '_blank');
}