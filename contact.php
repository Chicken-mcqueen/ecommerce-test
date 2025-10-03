<?php include 'includes/header.php'; ?>

<section class="hero">
  <h2>Contact Us</h2>
  <?php
    $message = '';
    if(isset($_POST['submit'])){
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $msg = htmlspecialchars($_POST['message']);

        $message = "Thank you, $name! Your message has been received.";
    }
  ?>
  <form method="POST" action="">
    <label>Name</label>
    <input type="text" name="name" required>
    <label>Email</label>
    <input type="email" name="email" required>
    <label>Message</label>
    <textarea name="message" required></textarea>
    <button type="submit" name="submit">Send Message</button>
  </form>
  <p><?php echo $message; ?></p>
</section>

<?php include 'includes/footer.php'; ?>
