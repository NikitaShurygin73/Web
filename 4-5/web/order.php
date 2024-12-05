<?php
// Настройки подключения к базе данных (заполните своими данными)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "classic_wheels";

try {
    // Создаем подключение к базе данных
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Проверяем, что запрос был отправлен через POST
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Получаем данные из POST-запроса
        $name = $_POST['name'] ?? null;
        $email = $_POST['email'] ?? null;
        $cardNumber = $_POST['cardNumber'] ?? null;
        $expiryDate = $_POST['expiryDate'] ?? null;
        $securityCode = $_POST['securityCode'] ?? null;

        // Проводим валидацию данных (это пример, используйте более надежную валидацию в реальной ситуации)
        if (empty($name) || empty($email) || empty($cardNumber) || empty($expiryDate) || empty($securityCode)) {
            echo 'Все поля должны быть заполнены.';
            exit;
        }

        // Запрос на добавление данных в базу
        $sql = "INSERT INTO contact_form (name, email, card_number, expiry_date, security_code) VALUES (:name, :email, :card_number, :expiry_date, :security_code)";
        $stmt = $pdo->prepare($sql);
        
        // Привязываем параметры к запросу
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':card_number', $cardNumber);
        $stmt->bindParam(':expiry_date', $expiryDate);
        $stmt->bindParam(':security_code', $securityCode);

        // Выполняем запрос
        if ($stmt->execute()) {
            echo 'Данные успешно добавлены в базу данных!';
        } else {
            echo 'Ошибка при добавлении данных в базу.';
        }
    }
} catch (PDOException $e) {
    echo 'Ошибка подключения к базе данных: ' . $e->getMessage();
}
?>