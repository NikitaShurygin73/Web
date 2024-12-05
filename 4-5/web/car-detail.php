<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Kite+One&display=swap" rel="stylesheet">
    <title>Classic Wheels - Car Details</title>
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
        <section id="car-detail" class="page">
            <div class="container">
                <div class="car-detail">
                    <h1 id="car-title" class="centered"></h1>
    
                    <div class="car-content">
                        <!-- Первый абзац -->
                        <p id="car-paragraph-1"></p>
    
                        <!-- Второй абзац: текст слева, изображения справа -->
                        <div class="row">
                            <div class="text">
                                <p id="car-paragraph-2"></p>
                            </div>
                            <div class="images">
                                <img id="car-image-2" class="car-image" src="" alt="">
                                <img id="car-image-3" class="car-image" src="" alt="">
                            </div>
                        </div>
    
                        <!-- Третий абзац: текст справа, изображение слева -->
                        <div class="row-reverse">
                            <div class="image-left">
                                <img id="car-image-4" class="car-image" src="" alt="">
                            </div>
                            <div class="text-right">
                                <p id="car-paragraph-3"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>    

    <script src="script.js"></script>
</body>
</html>