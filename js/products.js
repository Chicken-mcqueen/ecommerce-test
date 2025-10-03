const categories = {
  "Electronics & Gadgets": {
    "Mobile Phones & Accessories": ["Smartphones - Android","Smartphones - iOS","Cases & Covers","Screen Protectors","Chargers & Cables","Power Banks"],
    "Computers & Laptops": ["Laptops","Desktops","Monitors","Keyboards & Mice"]
  },
  "Fashion & Apparel": {
    "Women’s Clothing": ["Dresses","Tops & Blouses","T-Shirts","Sweaters & Cardigans","Jackets & Coats"],
    "Men’s Clothing": ["Shirts","T-Shirts & Polos","Sweaters & Hoodies","Jackets & Coats"]
  }
};

const rootSelect = document.getElementById("root-category");
const subSelect = document.getElementById("sub-category");
const leafSelect = document.getElementById("leaf-category");
const productsContainer = document.getElementById("products-container");

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
  leafs.forEach(leaf => leafSelect.appendChild(new Option(leaf, leaf)));
  leafSelect.disabled = false;

  productsContainer.innerHTML = leafs.map(leaf => `
    <div class='product-card'>
      <img src='https://via.placeholder.com/220x150?text=${encodeURIComponent(leaf)}' alt='${leaf}'>
      <h3>${leaf}</h3>
      <p>₱${Math.floor(Math.random()*2000)+500}</p>
      <button>View</button>
    </div>
  `).join('');
});

leafSelect.addEventListener("change", () => {
  const selectedLeaf = leafSelect.value;
  if (!selectedLeaf) return;

  productsContainer.innerHTML = `
    <div class='product-card'>
      <img src='https://via.placeholder.com/220x150?text=${encodeURIComponent(selectedLeaf)}' alt='${selectedLeaf}'>
      <h3>${selectedLeaf}</h3>
      <p>₱${Math.floor(Math.random()*2000)+500}</p>
      <button>View</button>
    </div>
  `;
});
