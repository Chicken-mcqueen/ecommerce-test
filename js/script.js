const categories = {
  "Electronics & Gadgets": {
    "Mobile Phones & Accessories": [
      "Smartphones - Android",
      "Smartphones - iOS",
      "Cases & Covers",
      "Screen Protectors",
      "Chargers & Cables",
      "Power Banks"
    ],
    "Computers & Laptops": [
      "Laptops",
      "Desktops",
      "Monitors",
      "Keyboards & Mice"
    ],
    "Audio & Headphones": [
      "Headphones - Wired",
      "Headphones - Wireless",
      "Speakers - Bluetooth"
    ],
    "Cameras & Photography": [
      "DSLR Cameras",
      "Mirrorless Cameras"
    ],
    "Wearables & Smart Devices": [
      "Smartwatches",
      "Fitness Bands"
    ],
    "Gaming & Consoles": [
      "PlayStation Consoles",
      "Xbox Consoles",
      "Nintendo Consoles",
      "PC Gaming Peripherals"
    ]
  },
  "Fashion & Apparel": {
    "Women’s Clothing": [
      "Dresses","Tops & Blouses","T-Shirts","Sweaters & Cardigans",
      "Jackets & Coats","Jeans","Trousers & Leggings","Skirts",
      "Shorts","Activewear","Swimwear & Beachwear","Sleepwear & Loungewear",
      "Maternity Wear"
    ],
    "Men’s Clothing": [
      "Shirts","T-Shirts & Polos","Sweaters & Hoodies","Jackets & Coats",
      "Jeans","Trousers & Chinos","Shorts","Activewear","Swimwear",
      "Sleepwear & Loungewear"
    ],
    "Footwear": [
      "Women’s Shoes - Heels","Women’s Shoes - Flats","Women’s Shoes - Sneakers",
      "Women’s Shoes - Boots","Women’s Shoes - Sandals & Slippers",
      "Men’s Shoes - Sneakers","Men’s Shoes - Formal Shoes","Men’s Shoes - Boots",
      "Men’s Shoes - Sandals & Slippers"
    ],
    "Specialty Fashion": [
      "Traditional & Cultural Wear","Plus Size","Petite","Kids & Teens Apparel"
    ]
  }
};

const rootSelect = document.getElementById("root-category");
const subSelect = document.getElementById("sub-category");
const leafSelect = document.getElementById("leaf-category");

Object.keys(categories).forEach(root => {
  const option = document.createElement("option");
  option.value = root;
  option.textContent = root;
  rootSelect.appendChild(option);
});

rootSelect.addEventListener("change", () => {
  subSelect.innerHTML = '<option value="">-- Select Subcategory --</option>';
  leafSelect.innerHTML = '<option value="">-- Select Leaf Category --</option>';
  leafSelect.disabled = true;

  const selectedRoot = rootSelect.value;
  if (!selectedRoot) {
    subSelect.disabled = true;
    return;
  }

  const subcategories = Object.keys(categories[selectedRoot]);
  subcategories.forEach(sub => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subSelect.appendChild(option);
  });

  subSelect.disabled = false;
});

subSelect.addEventListener("change", () => {
  leafSelect.innerHTML = '<option value="">-- Select Leaf Category --</option>';

  const selectedRoot = rootSelect.value;
  const selectedSub = subSelect.value;

  if (!selectedSub) {
    leafSelect.disabled = true;
    return;
  }

  const leafs = categories[selectedRoot][selectedSub];
  leafs.forEach(leaf => {
    const option = document.createElement("option");
    option.value = leaf;
    option.textContent = leaf;
    leafSelect.appendChild(option);
  });

  leafSelect.disabled = false;
});
