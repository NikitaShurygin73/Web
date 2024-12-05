<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classic Wheels - Payment</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <a href="index.php" class="logo">
            <img src="images/logo.png" alt="Classic Wheels Logo">
            Classic Wheels
        </a>
        <nav class="nav">
            <a href="articles.php">Home</a>
            <a href="payment.php">Pricing</a>
        </nav>
    </header>

    <main>
        <section id="payment" class="page">
            <div class="container">
                <div class="payment-form">
                    <h2>PAYMENT INFORMATION</h2>
                    <form action="payment.php" method="POST">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" class="form-control" autocomplete="name" placeholder="Enter your full name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-control" autocomplete="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" name="card_number" class="form-control" placeholder="Enter card number" required>
                        </div>
                        <div class="form-group">
                            <label for="expiry-date">Expiration date</label>
                            <input type="text" id="expiry-date" name="expiry_date" class="form-control" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group">
                            <label for="security-code">Security code</label>
                            <input type="text" id="security-code" name="security_code" class="form-control" placeholder="CVV" required>
                        </div>
                        <div class="total-amount">
                            <span>Total Amount:</span>
                            <span>59$ for year</span>
                        </div>
                        <button type="submit" class="btn btn-primary continue-button">Continue</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>