let cartCount = 0; // Initialize cart count

function addToCart() {
    cartCount++; // Increment cart count by 1 each time the function is called
    document.querySelector('.cart-count').textContent = cartCount; // Update the cart count displayed
}

function removeCart() {
    if (cartCount > 0) {
        cartCount--;
        document.querySelector('.cart-count').textContent = cartCount;
    }
}