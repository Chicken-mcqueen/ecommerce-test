<?php include 'includes/header.php'; ?>

<section class="products-section">
  <h2>Products</h2>
  <div class="category-select">
    <label for="root-category">Root Category</label>
    <select id="root-category">
      <option value="">-- Select Root Category --</option>
      <?php foreach($categories as $root => $subs) { echo "<option value='$root'>$root</option>"; } ?>
    </select>
  </div>

  <div class="category-select">
    <label for="sub-category">Subcategory</label>
    <select id="sub-category" disabled>
      <option value="">-- Select Subcategory --</option>
    </select>
  </div>

  <div class="category-select">
    <label for="leaf-category">Leaf Category</label>
    <select id="leaf-category" disabled>
      <option value="">-- Select Leaf Category --</option>
    </select>
  </div>

  <div class="products-container" id="products-container">
  </div>
</section>

<script>
const categories = <?php echo json_encode($categories); ?>;

const rootSelect = document.getElementById("root-category");
const subSelect = document.getElementById("sub-category");
const leafSelect = document.getElementById("leaf-category");
const productsContainer = document.getElementById("products-container");

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
      <img src='https://via.placeholder.com/220x150?text=${leaf}' alt='${leaf}'>
      <h3>${leaf}</h3>
      <p>₱${Math.floor(Math.random()*2000)+500}</p>
      <button>View</button>
    </div>
  `).join('');
});
</script>

<?php include 'includes/footer.php'; ?>
