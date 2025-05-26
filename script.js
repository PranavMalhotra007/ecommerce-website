// Dummy Product Data
const products = [
  { id: 1, name: 'Cool Shirt', price: 29.99, img: 'assets/img/shirt.jpg', sale: false },
  { id: 2, name: 'Sneakers', price: 59.99, img: 'assets/img/shoes.jpg', sale: true },
  { id: 3, name: 'Jacket', price: 89.99, img: 'assets/img/jacket.jpg', sale: false },
];

// Render Products
function renderProducts() {
  const newArrivals = document.getElementById('newArrivals');
  const saleItems = document.getElementById('saleItems');

  products.forEach(product => {
    const html = `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}" onclick="viewProduct(${product.id})" />
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    product.sale ? saleItems.innerHTML += html : newArrivals.innerHTML += html;
  });
}

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Added to cart!");
}

// View Product
function viewProduct(id) {
  localStorage.setItem('productId', id);
  window.location.href = 'product.html';
}

// Render Product Detail
if (document.getElementById('productDetail')) {
  const id = localStorage.getItem('productId');
  const product = products.find(p => p.id == id);
  document.getElementById('productDetail').innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.img}" alt="${product.name}" />
    <p>Price: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
}

// Render Cart
if (document.getElementById('cartItems')) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cartItems').innerHTML = cart.map(p => `
    <p>${p.name} - $${p.price}</p>
  `).join('');
}

function checkout() {
  alert("Proceeding to checkout...");
}
document.addEventListener('DOMContentLoaded', renderProducts);
