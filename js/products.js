const categories = {
  "Electronics & Gadgets": {
    "Mobile Phones & Accessories": [
      { name: "Smartphones - Android", image: "images/android.jpg" },
      { name: "Smartphones - iOS", image: "images/ios.jpg" },
      { name: "Cases & Covers", image: "images/cases.jpg" }
    ],
    "Computers & Laptops": [
      { name: "Laptops", image: "images/laptops.jpg" },
      { name: "Desktops", image: "images/desktop.jpg" },
      { name: "Monitors", image: "images/monitors.jpg" }
    ]
  },
  "Fashion & Apparel": {
    "Women’s Clothing": [
      { name: "Dresses", image: "images/dress.jpg" },
      { name: "Tops & Blouses", image: "images/tops.jpg" }
    ],
    "Men’s Clothing": [
      { name: "Shirts", image: "images/shirt.jpg" },
      { name: "T-Shirts & Polos", image: "images/tshirt.jpg" }
    ]
  }
};

const rootSelect = document.getElementById("root-category");
const subSelect = document.getElementById("sub-category");
const leafSelect = document.getElementById("leaf-category");
const productsContainer = document.getElementById("products-container");

// Populate Root Category
Object.keys(categories).forEach(root => {
  rootSelect.appendChild(new Option(root, root));
});

rootSelect.addEventListener("change", () => {
  subSelect.innerHTML = '<option value="">-- Select Subcategory --</option>';
  leafSelect.innerHTML = '<option value="">-- Select Leaf Category --</option>';
  productsContainer.innerHTML = '';
  leafSelect.disabled = true;

  const selectedRoot = rootSelect.value;
  if (!selectedRoot) { subSelect.disabled = true; return; }

  const subs = Object.keys(categories[selectedRoot]);
  subs.forEach(sub => subSelect.appendChild(new Option(sub, sub)));
  subSelect.disabled = false;
});

subSelect.addEventListener("change", () => {
  leafSelect.innerHTML = '<option value="">-- Select Leaf Category --</option>';
  productsContainer.innerHTML = '';

  const selectedRoot = rootSelect.value;
  const selectedSub = subSelect.value;
  if (!selectedSub) { leafSelect.disabled = true; return; }

  const leafs = categories[selectedRoot][selectedSub];
  leafs.forEach(leaf => leafSelect.appendChild(new Option(leaf.name, leaf.name)));
  leafSelect.disabled = false;

  // Display all products in subcategory
  productsContainer.innerHTML = leafs.map(leaf => `
    <div class='product-card'>
      <img src='${leaf.image}' alt='${leaf.name}'>
      <h3>${leaf.name}</h3>
      <p>₱${Math.floor(Math.random()*2000)+500}</p>
      <button>View</button>
    </div>
  `).join('');
});

leafSelect.addEventListener("change", () => {
  const selectedRoot = rootSelect.value;
  const selectedSub = subSelect.value;
  const selectedLeaf = leafSelect.value;
  if (!selectedLeaf) return;

  const leafs = categories[selectedRoot][selectedSub];
  const product = leafs.find(p => p.name === selectedLeaf);

  productsContainer.innerHTML = `
    <div class='product-card'>
      <img src='${product.image}' alt='${product.name}'>
      <h3>${product.name}</h3>
      <p>₱${Math.floor(Math.random()*2000)+500}</p>
      <button>View</button>
    </div>
  `;
});
