let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(productName + " added to cart! 🛒");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Display cart items on cart.html
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerText = "0";
        return;
    }

    let cartHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        cartHTML += `
            <div class="cart-item">
                <span>${item.name} - $${item.price}</span>
                <button onclick="removeFromCart(${index})">❌ Remove</button>
            </div>
        `;
        total += item.price;
    });

    cartItems.innerHTML = cartHTML;
    cartTotal.innerText = total;
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("✅ Payment successful! Thank you for shopping.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

// Load cart count when opening index.html
if (document.getElementById("cart-count")) {
    updateCartCount();
}

// Load cart items when opening cart.html
if (document.getElementById("cart-items")) {
    displayCart();
}
