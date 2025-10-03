<?php include 'includes/header.php'; ?>
<section class="hero">
  <h2>Coming Soon!</h2>
  <p>PasigPalengke is an affiliate product aggregator powered by Involve Asia.</p>
</section>

<section class="products-section">
  <h2>Sample Products</h2>
  <div class="products-container">
    <?php
      $sampleProducts = [
          ["name"=>"Product 1","price"=>1200,"image"=>"https://via.placeholder.com/220x150?text=Product+1"],
          ["name"=>"Product 2","price"=>1500,"image"=>"https://via.placeholder.com/220x150?text=Product+2"],
          ["name"=>"Product 3","price"=>800,"image"=>"https://via.placeholder.com/220x150?text=Product+3"]
      ];

      foreach($sampleProducts as $product){
          echo "<div class='product-card'>
                  <img src='{$product['image']}' alt='{$product['name']}'>
                  <h3>{$product['name']}</h3>
                  <p>₱".number_format($product['price'])."</p>
                  <button>View</button>
                </div>";
      }
    ?>
  </div>
</section>
<?php include 'includes/footer.php'; ?>
