const products = [
  { name: "Product 1", price: 1200, image: "https://via.placeholder.com/220x150?text=Product+1" },
  { name: "Product 2", price: 1500, image: "https://via.placeholder.com/220x150?text=Product+2" },
  { name: "Product 3", price: 800,  image: "https://via.placeholder.com/220x150?text=Product+3" },
  { name: "Product 4", price: 2000, image: "https://via.placeholder.com/220x150?text=Product+4" }
];

const productsContainer = document.getElementById("products-container");
products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₱${product.price.toLocaleString()}</p>
    <button>View</button>
  `;
  productsContainer.appendChild(card);
});
