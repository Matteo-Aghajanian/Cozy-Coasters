let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function checkout() {
  alert('Thank you for your purchase! This demo does not process payments yet.');
  cart = [];
  total = 0;
  updateCartDisplay();
}
