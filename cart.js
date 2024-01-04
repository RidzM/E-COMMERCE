document.querySelector('.add-to-cart').addEventListener('click', function() {
  const product = this.parentElement;
  const cart = document.querySelector('.cart-items');
   
  const cartItem = document.createElement('li');
  cartItem.textContent = product.querySelector('h2').textContent;
   
  cart.appendChild(cartItem);
 });