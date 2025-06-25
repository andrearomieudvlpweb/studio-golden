et cart = [];
const cartElement = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartButton = document.getElementById('open-cart');

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} €`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
}

function clearCart() {
  cart = [];
  updateCart();
}

cartButton.addEventListener('click', () => {
  cartElement.classList.toggle('active');
});
