document.addEventListener('DOMContentLoaded', () => {
    // Функция для получения данных о машинах с сервера
    function loadCarData() {
        var xhr = new XMLHttpRequest();  // Создаем новый объект XMLHttpRequest

        // Открываем запрос к серверу (укажите путь к вашему PHP файлу)
        xhr.open("GET", "script.php", true);

        // Устанавливаем функцию, которая будет вызвана, когда запрос завершится
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Парсим полученные данные в формате JSON
                const cars = JSON.parse(xhr.responseText);
                console.log(cars);

                // Get reference to necessary elements
                const carsGrid = document.querySelector('.cars-grid');
                const carTitle = document.getElementById('car-title');
                const carParagraph1 = document.getElementById('car-paragraph-1');
                const carParagraph2 = document.getElementById('car-paragraph-2');
                const carParagraph3 = document.getElementById('car-paragraph-3');
                const carImage2 = document.getElementById('car-image-2');
                const carImage3 = document.getElementById('car-image-3');
                const carImage4 = document.getElementById('car-image-4');

                // Check if on the "car selection" page
                if (carsGrid) {
                    // Populate the cars grid (for the car selection page)
                    cars.forEach(car => {
                        const carCard = document.createElement('div');
                        carCard.classList.add('car-card');
                        carCard.innerHTML = `
                            <img src="${car.image[0]}" alt="${car.name}" class="car-image"> <!-- Используем первое изображение из массива -->
                            <div class="car-info">
                                <h3 class="car-name">${car.name}</h3>
                                <p class="car-year">Year: ${car.year}</p>
                                <p class="car-location">Location: ${car.location}</p>
                            </div>
                        `;
                        carCard.addEventListener('click', () => {
                            window.location.href = `car-detail.php?id=${car.id}`;
                        });
                        carsGrid.appendChild(carCard);
                    });
                }

                // Check if on the "car detail" page
                if (carTitle) {
                    // Get car id from the URL
                    const urlParams = new URLSearchParams(window.location.search);
                    const carId = urlParams.get('id');
                    const car = cars.find(c => parseInt(c.id) === parseInt(carId));
                    console.log(car);
                    if (car) {
                        // Set the title
                        carTitle.textContent = car.name;

                        // Set first paragraph
                        carParagraph1.textContent = car.description[0];

                        // Set second paragraph and images
                        carParagraph2.textContent = car.description[1];
                        carImage2.src = car.image[1];
                        carImage3.src = car.image[2];

                        // Set third paragraph and last image
                        carParagraph3.textContent = car.description[2];
                        carImage4.src = car.image[3];
                    }
                }
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                console.error("Ошибка запроса: " + xhr.status);
            }
        };

        // Отправляем запрос
        xhr.send();
    }

    // Загружаем данные при загрузке страницы
    loadCarData();

    const continueButton = document.querySelector('.btn-primary'); // Кнопка "Continue"
    const inputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        cardNumber: document.getElementById('card-number'),
        expiryDate: document.getElementById('expiry-date'),
        securityCode: document.getElementById('security-code')
    };

    if (continueButton) {
        // Проверки для каждого поля
        const validators = {
            email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // Простая проверка email
            cardNumber: value => /^\d{16}$/.test(value), // Ровно 16 цифр
            expiryDate: value => {
                const match = value.match(/^(0[1-9]|1[0-2])\/\d{2}$/); // Формат MM/YY
                if (!match) return false;
                const [month] = value.split('/').map(Number);
                return month >= 1 && month <= 12;
            },
            securityCode: value => /^\d{3,4}$/.test(value) // 3 или 4 цифры
        };

        // Функция проверки полей
        const checkFields = () => {
            let allValid = true;

            Object.entries(inputs).forEach(([key, input]) => {
                if (!input) return;
                const value = input.value.trim();
                const errorElement = input.nextElementSibling; // Элемент для ошибки

                if (!value || (validators[key] && !validators[key](value))) {
                    // Если поле некорректное
                    allValid = false;
                    if (errorElement) {
                        errorElement.textContent = `Некорректное значение для поля ${key}`;
                    }
                } else if (errorElement) {
                    // Убираем ошибку, если поле валидно
                    errorElement.textContent = '';
                }
            });

            return allValid;
        };

        // Привязываем проверку к каждому полю ввода
        Object.values(inputs).forEach(input => {
            if (input) {
                input.addEventListener('input', checkFields);
            }
        });

        // Обработчик клика для отправки данных
        continueButton.addEventListener('click', () => {
            if (checkFields()) {
                const data = Object.fromEntries(
                    Object.entries(inputs).map(([key, input]) => [key, input.value.trim()])
                );

                const xhr = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest
                xhr.open('POST', 'order.php', true); // Открываем запрос к серверу (укажите путь к PHP файлу)

                // Устанавливаем заголовки для отправки данных в формате POST
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                // Формируем данные для отправки
                const formData = new URLSearchParams(data).toString();

                // Отправляем данные на сервер
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        alert('Данные успешно отправлены!');
                    } else {
                        alert('Ошибка при отправке данных.');
                    }
                };

                // Отправляем запрос
                xhr.send(formData);
            } else {
                alert('Пожалуйста, исправьте ошибки в форме!');
            }
        });
    }
});    