<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "classic_wheels";

// Подключение к базе данных
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}

// SQL-запрос для выборки данных из таблицы cars
$sql = "SELECT id, name, year, location, description, image FROM cars";

$result = mysqli_query($conn, $sql);

// Проверка на ошибки выполнения запроса
if (!$result) {
    die("Ошибка выполнения запроса: " . mysqli_error($conn));
}

// Преобразование данных в массив PHP
$data = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        // Проверяем, если столбец 'image' не пустой и разделяем
        $image = !empty($row['image']) ? explode(',', $row['image']) : [];
        
        // Проверяем, если столбец 'description' не пустой и разделяем
        $description = !empty($row['description']) ? explode('.,', $row['description']) : [];

        // Добавление данных о машине
        $data[] = array(
            "id" => $row['id'],
            "name" => $row['name'],
            "year" => $row['year'],
            "location" => $row['location'],
            "image" => $image,
            "description" => $description
        );
    }
}

// Закрытие соединения с базой данных
mysqli_close($conn);

// Преобразование массива данных в формат JSON и вывод на экран
echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>