// Function to update total price
function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
      let price = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
      let quantity = parseInt(item.querySelector('.quantity').innerText);
      total += price * quantity;
  });
  document.getElementById('total-price').innerText = '$' + total.toFixed(2);
}

// Increase quantity
function increaseQuantity(event) {
  let quantityElement = event.target.closest('.cart-item').querySelector('.quantity');
  quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
  updateTotal();
}

// Decrease quantity
function decreaseQuantity(event) {
  let quantityElement = event.target.closest('.cart-item').querySelector('.quantity');
  let currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 1) {
      quantityElement.innerText = currentQuantity - 1;
      updateTotal();
  }
}

// Remove item from cart
function removeItem(event) {
  event.target.closest('.cart-item').remove();
  updateTotal();
}

// Toggle heart like button
function toggleLike(event) {
  event.target.classList.toggle('liked');
}

// Add event listeners after page loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.increase').forEach(button => button.addEventListener('click', increaseQuantity));
  document.querySelectorAll('.decrease').forEach(button => button.addEventListener('click', decreaseQuantity));
  document.querySelectorAll('.delete').forEach(button => button.addEventListener('click', removeItem));
  document.querySelectorAll('.like').forEach(button => button.addEventListener('click', toggleLike));
  updateTotal(); // Initial total calculation
});