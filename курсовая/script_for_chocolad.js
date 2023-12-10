const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const product = event.target.parentElement;
  // Код для добавления товара в корзину
}

function addToCart(event) {
    const product = event.target.parentElement;
  
    const productId = product.id;
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('#price').textContent;
    const productImage = product.querySelector('#choc_img').textContent;
  
    const cartItem = {
      id: productId,
      image: productImage,
      name: productName,
      price: parseFloat(productPrice),
      quantity: 1
    };
  
    let cartItems = [];
  
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
  
    const existingItem = cartItems.find(item => item.id === productId);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push(cartItem);
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }