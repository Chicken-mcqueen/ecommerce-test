const categorySamples = [
  { name: "Electronics & Gadgets", image: "images/laptops.jpg" },
  { name: "Fashion & Apparel", image: "images/dress.jpg" }
];

const productsContainer = document.getElementById("products-container");

categorySamples.forEach(category => {
  const cardLink = document.createElement("a");
  cardLink.href = "products.html"; 
  cardLink.classList.add("product-link");

  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${category.image}" alt="${category.name}">
    <h3>${category.name}</h3>
  `;

  cardLink.appendChild(card);
  productsContainer.appendChild(cardLink);
});
