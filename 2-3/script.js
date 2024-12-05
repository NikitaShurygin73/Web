document.addEventListener('DOMContentLoaded', () => {
    // Sample car data (use the same data for both pages)
    const cars = [
        {
            id: 1,
            name: 'Porsche 911 Classic',
            year: "1964-1989",
            location: 'Stuttgart, Germany',
            images: ['images/ArticlesPhotos/car1.png', 'images/DetailCarPhotos/1_porsche.png', 'images/DetailCarPhotos/2_porsche.png', 'images/DetailCarPhotos/3_porsche.png'],
            descriptions: [
                'The original Porsche 911 (pronounced nine eleven, German: Neunelfer) is a luxury sports car made by Porsche AG of Stuttgart, Germany. A prototype of the famous, distinctive, and durable design was shown to the public in autumn 1963. Production began in September 1964 and continued through 1989. It was succeeded by a modified version, internally referred to as Porsche 964 but still sold as Porsche 911, as are current models. Mechanically, the 911 was notable for being rear-engined and air-cooled. From its inception, the 911 was modified both by private teams and the factory itself for racing, rallying and other types of automotive competition. The original 911 series is often cited as the most successful competition car ever, especially when its variations are included, mainly the powerful 911-derived 935 which won 24 Hours of Le Mans and other major sports car races outright against prototypes.',
                'The Porsche factory\'s first 911-based race car was a lightly modified 1964 Type 901. It finished fifth in the 1965 Monte Carlo Rally and is now housed in the Porsche Museum. Porsche 911s dominated the Trans Am Series under two liter class in the sixties, winning the championship from 1967 to 1969. They would later go on to win the championship in 1973, 1974, and 1980. Despite Trans Am being a sedan championship in its early years, the Porsche 911 was a sports car. Its inclusion is likely due to its resemblance to a coupé. A 1967 911, driven by Jack Ryan raced in NASCAR for a total of 13 races of the 1968 season.',
                'The Porsche 911 was developed as a much more powerful, larger, more comfortable replacement for the Porsche 356. The new car made its public debut at the 1963 Internationale Automobil-Ausstellung, better known to English speakers as the Frankfurt Motor Show. It was initially designated as the "Porsche 901", after its internal project number. However, Peugeot protested on the grounds that in France it had exclusive rights to car names formed by three numbers with a zero in the middle. Instead of selling the new model with another name in France, Porsche changed the name to 911 for all markets. It went on sale in 1964. When 911 sales began to decline by the early 1970s, Porsche executives approved work on the Porsche 928 in 1971. Larger and featuring a front-mounted V8 engine considerably more powerful than the contemporary 911\'s flat six, the 928 was intended to be a comfortable grand tourer rather than a dedicated sports car. Capable of out-accelerating and even matching or exceeding the 911\'s cornering prowess in some model years, the 928 sold reasonably well from its introduction in 1977 until its discontinuation in 1995. In spite of its overall capability, it never outsold the 911, and unlike its smaller, sportier sibling, it achieved little success in racing.'
            ]
        },
        {
            id: 2,
            name: 'Mercedes-Benz W124',
            year: "1984-1996",
            location: 'Sindelfingen, Germany',
            images: ['images/ArticlesPhotos/car2.png', 'images/DetailCarPhotos/1_Mercedes_W124.jpeg', 'images/DetailCarPhotos/2_Mercedes_W124.jpg', 'images/DetailCarPhotos/3_Mercedes_W124.jpeg'],
            descriptions: [
                'The Mercedes-Benz W124, introduced in 1984, is often considered one of the finest examples of German engineering. Designed to replace the W123, this model featured a revolutionary aerodynamic design that reduced drag and improved fuel efficiency. Its construction emphasized durability, with many W124 vehicles still in operation today. The car offered a range of powertrains, from reliable diesel engines to high-performance petrol variants. Inside, the W124 prioritized comfort and luxury, introducing innovations such as electronically adjustable seats, dual-zone climate control, and advanced sound systems. The introduction of the 500E, a performance variant developed in collaboration with Porsche, showcased Mercedes’ commitment to combining speed with refinement.',
                'Safety was a cornerstone of the W124\'s design. It introduced crumple zones, antilock braking systems (ABS), and driver airbags as standard features in later models. The Estate (wagon) version gained popularity for its practicality, featuring a self-leveling suspension that enhanced comfort regardless of load. Meanwhile, the coupe and convertible variants appealed to drivers seeking style and exclusivity. The W124 also marked the debut of Mercedes\' 4MATIC all-wheel-drive system, offering improved traction in adverse conditions. Its well-balanced chassis and multi-link rear suspension ensured precise handling, making it a favorite among drivers seeking both performance and reliability.',
                'The W124’s impact extends beyond its production years, influencing subsequent Mercedes-Benz designs. It represents the pinnacle of Mercedes’ pre-modern era, built with a level of quality that earned it the nickname “The Last Over-Engineered Mercedes.” Enthusiasts value it not just for its reliability but also for its timeless design and engineering prowess. Many regard the W124 as a perfect blend of tradition and innovation, a car that set the standard for executive sedans worldwide. Decades after its debut, the W124 remains a symbol of Mercedes-Benz’s dedication to excellence.'
            ]
        },
        {
            id: 3,
            name: 'Ford Mustang GT350',
            year: "1965-1970",
            location: 'Michigan, USA',
            images: ['images/ArticlesPhotos/car3.png', 'images/DetailCarPhotos/1_Mustang.jpg', 'images/DetailCarPhotos/2_Mustang.jpg', 'images/DetailCarPhotos/3_Mustang.jpg'],
            descriptions: [
                'The Ford Mustang GT350, produced between 1965 and 1970, is one of the most iconic muscle cars ever created. Developed by Carroll Shelby, the GT350 was based on the Ford Mustang fastback and transformed into a high-performance racing machine. Equipped with a powerful 289-cubic-inch V8 engine producing up to 306 horsepower, the GT350 was designed for speed and agility. Its lightweight construction, combined with enhanced suspension and braking systems, made it a formidable competitor on the track. The GT350’s aggressive styling, including racing stripes and side scoops, further solidified its reputation as a performance icon.',
                'The GT350 made its mark in motorsports by dominating SCCA (Sports Car Club of America) racing. Its performance was bolstered by a close-ratio 4-speed transmission, high-performance intake, and exhaust systems, which allowed it to outperform many of its competitors. The "R" model variant was specifically developed for racing, featuring stripped-down interiors, fiberglass components, and a roll cage. This version secured numerous victories, cementing the GT350’s place in automotive history. The collaboration between Ford and Shelby also produced the GT500, but the GT350 remained a purist’s choice for its nimble handling and racing pedigree.',
                'Beyond the racetrack, the GT350 became a cultural symbol of American muscle. Its combination of power, style, and heritage appealed to a wide audience, from car enthusiasts to casual drivers. The GT350’s legacy continues with modern iterations under the Shelby name, showcasing the timeless appeal of this classic. Collectors today prize original models for their rarity and historical significance, often fetching high prices at auctions. The GT350’s influence on the muscle car segment is undeniable, representing a golden era of American automotive innovation and performance.'
            ]
        },
        {
            id: 4,
            name: 'BMW E30',
            year: "1982-1994",
            location: 'Munich, Germany',
            images: ['images/ArticlesPhotos/car4.png', 'images/DetailCarPhotos/2_bmwe30.jpg', 'images/DetailCarPhotos/2_bmwe30.jpg', 'images/DetailCarPhotos/3_bmwe30.jpg'],
            descriptions: [
                'The BMW E30, produced from 1982 to 1994, is celebrated as one of the most beloved models in BMW\'s history. As the second generation of the 3 Series, it introduced a perfect combination of sporty dynamics, elegant design, and everyday practicality. Available in a variety of body styles, including sedans, coupes, convertibles, and station wagons, the E30 catered to diverse customer needs. Its rear-wheel-drive setup and finely tuned suspension made it a joy to drive, establishing BMW as the ultimate driving machine. Inside, the E30 featured a driver-focused cockpit, blending functionality with premium materials.',
                'The E30’s M3 variant, introduced in 1986, revolutionized the concept of a sports sedan. Designed for homologation in motorsports, the M3 featured flared fenders, lightweight materials, and a high-revving S14 engine that delivered exhilarating performance. It dominated touring car championships and remains a cult classic among enthusiasts. Other models, such as the 325i with its smooth inline-six engine and the economical 318i, appealed to a broader audience. The E30 also offered cutting-edge technology for its time, including ABS and electronic fuel injection, enhancing both safety and efficiency.',
                'Decades after its production ended, the E30 continues to enjoy a dedicated fanbase. Its classic design and mechanical simplicity make it a popular choice for restoration projects and modifications. Whether as a daily driver or a track car, the E30 remains a testament to BMW’s engineering excellence. Its influence is evident in modern 3 Series models, and its status as a cultural icon ensures its legacy will endure for generations to come.'
            ]
        },
        {
            id: 5,
            name: 'Ferrari F40',
            year: "1987-1992",
            location: 'Maranello, Italy',
            images: ['images/ArticlesPhotos/car5.png', 'images/DetailCarPhotos/1_ferrari_f40.png', 'images/DetailCarPhotos/2_ferrari_f40.png', 'images/DetailCarPhotos/3_ferrari_f40.png'],
            descriptions: [
                'The Ferrari F40, unveiled in 1987, is one of the most iconic supercars ever produced. Built to commemorate Ferrari\'s 40th anniversary, it was the last model personally approved by Enzo Ferrari before his passing. Featuring a lightweight, aerodynamic body made of carbon fiber, Kevlar, and aluminum, the F40 was designed with pure performance in mind. It was powered by a 2.9-liter twin-turbocharged V8 engine, producing 471 horsepower, which allowed it to achieve a top speed of 201 mph, making it the fastest production car of its time. The F40 offered a raw and unfiltered driving experience, with no power steering, anti-lock brakes, or electronic aids.',
                'The F40 was Ferrari\'s answer to increasing competition in the supercar market, particularly from Porsche\'s 959. Unlike its high-tech rival, the F40 was deliberately minimalistic. The interior was stripped down, with exposed carbon fiber panels, a simple dashboard, and bucket seats designed for track performance. Every element was focused on reducing weight and enhancing driving precision. Only 1,315 units were produced, making it a highly sought-after collector\'s item. The car\'s aggressive design, featuring large air intakes, a prominent rear wing, and sleek lines, is still celebrated as a masterpiece of automotive engineering.',
                'The Ferrari F40 quickly became a cultural icon, representing the pinnacle of 1980s supercar performance. It dominated headlines and established a new benchmark for road-legal cars. Despite its raw nature, the F40 was a symbol of Ferrari\'s engineering prowess and a testament to the brand\'s racing heritage. Owners and enthusiasts often describe it as one of the most exhilarating cars to drive, demanding skill and respect from the driver. Even decades after its debut, the F40 remains a legend in the automotive world and a dream car for many enthusiasts.'
            ]
        }, 
        {
            id: 6,
            name: 'Chevrolet Corvette C3',
            year: "1968-1982",
            location: 'St. Louis, Missouri, USA',
            images: ['images/ArticlesPhotos/car6.png', 'images/DetailCarPhotos/1_corvette_c3.png', 'images/DetailCarPhotos/2_corvette_c3.png', 'images/DetailCarPhotos/3_corvette_c3.png'],
            descriptions: [
                'The Chevrolet Corvette C3, also known as the "Shark Body" Corvette, was introduced in 1968 and became an instant classic. Its design, inspired by the Mako Shark II concept car, featured dramatic curves, a long hood, and a sleek, aerodynamic profile that captivated enthusiasts worldwide. Under the hood, the C3 offered a variety of engine options, ranging from the 5.0-liter small-block V8 to the legendary 7.4-liter big-block V8, with power outputs ranging from 300 to 435 horsepower in its early years. The C3 was a true American sports car, combining performance, style, and charisma.',
                'Throughout its 14-year production run, the Corvette C3 underwent numerous updates and changes. Early models (1968–1972) were known for their powerful engines and raw performance, while later versions (1973–1982) saw a shift toward comfort and emissions compliance. Despite these changes, the C3 remained a favorite among enthusiasts, thanks to its iconic design and robust performance. The 1970 model year, in particular, is highly regarded, as it featured some of the most powerful engine options available, including the LS6 454 V8. The C3 also introduced T-top removable roof panels, which became a defining feature of the Corvette lineup.',
                'The Corvette C3 solidified Chevrolet\'s reputation for producing high-performance sports cars at an accessible price point. It became a cultural icon, appearing in numerous films, TV shows, and music videos, and it played a significant role in cementing the Corvette\'s legacy as "America\'s Sports Car." With over 1.5 million units sold, the C3 remains one of the most recognizable and beloved Corvette generations. Today, it is highly sought after by collectors and enthusiasts who admire its unique combination of vintage styling and classic American muscle.'
            ]
        },
        {
            id: 7,
            name: 'Lamborghini Countach',
            year: "1974-1990",
            location: 'Sant’Agata Bolognese, Italy',
            images: ['images/ArticlesPhotos/car7.png', 'images/DetailCarPhotos/1_countach.png', 'images/DetailCarPhotos/2_countach.png', 'images/DetailCarPhotos/3_countach.png'],
            descriptions: [
                'The Lamborghini Countach is one of the most iconic and influential supercars in automotive history. Introduced in 1974, it set new standards for performance and design with its sharp, angular lines and scissor doors, a feature that became a hallmark of Lamborghini. Designed by Marcello Gandini of Bertone, the Countach pushed boundaries with its radical wedge-shaped silhouette, aggressive stance, and futuristic appearance. Underneath its striking bodywork, the Countach featured a mid-mounted V12 engine, initially producing 375 horsepower, and a five-speed manual transmission, delivering exhilarating performance and a top speed of over 180 mph.',
                'Throughout its production run, the Countach underwent several updates and improvements. Early models, such as the LP400, were renowned for their purity of design and relatively lightweight construction. Later iterations, like the LP500 S and LP5000 QV, introduced more powerful engines and wider tires to enhance performance. The final variant, the 25th Anniversary Edition, launched in 1988, featured redesigned body panels and improved aerodynamics, making it the most refined Countach ever produced. Despite these changes, the car retained its uncompromising character and remained a symbol of extreme performance and luxury.',
                'The Lamborghini Countach became an automotive legend, representing the ultimate dream car for generations of enthusiasts. It was featured prominently in posters, films, and video games, cementing its place in popular culture. With only 1,983 units built over its 16-year production span, the Countach is highly collectible and remains a centerpiece in Lamborghini\'s legacy. Its groundbreaking design and engineering not only inspired future Lamborghini models but also influenced the entire supercar segment, ensuring its place as one of the greatest cars of all time.'
            ]
        },
        {
            id: 8,
            name: 'Jaguar E-Type Series 1',
            year: "1961-1968",
            location: 'Coventry, England',
            images: ['images/ArticlesPhotos/car8.png', 'images/DetailCarPhotos/1_e-type.png', 'images/DetailCarPhotos/2_e-type.png', 'images/DetailCarPhotos/3_e-type.png'],
            descriptions: [
                'The Jaguar E-Type Series 1 is celebrated as one of the most beautiful cars ever made and remains an icon of 1960s automotive design. Introduced at the Geneva Motor Show in 1961, the E-Type was praised for its stunning aesthetics and advanced engineering. Its sleek, aerodynamic bodywork was inspired by Jaguar’s racing heritage, specifically the D-Type that won the 24 Hours of Le Mans three times. The E-Type featured a 3.8-liter inline-six engine producing 265 horsepower, paired with a four-speed manual gearbox. It could accelerate from 0 to 60 mph in under seven seconds and reach a top speed of 150 mph, making it one of the fastest production cars of its time.',
                'The Series 1 E-Type was available as both a two-seater coupe and a convertible, offering timeless elegance and exhilarating performance. In 1964, the engine was upgraded to a 4.2-liter unit, providing more torque and improved drivability. The car’s independent suspension, disc brakes on all four wheels, and lightweight monocoque construction gave it exceptional handling and ride quality. These innovations made the E-Type not only beautiful but also technically advanced, rivaling far more expensive sports cars.',
                'The Jaguar E-Type Series 1 quickly became a cultural icon, earning admirers from celebrities, racing enthusiasts, and car aficionados alike. Enzo Ferrari himself famously called it "the most beautiful car ever made." Its combination of performance, affordability, and striking design helped define the golden era of sports cars. With only a few thousand Series 1 models produced, these cars are highly sought after by collectors and continue to be celebrated as masterpieces of automotive art.'
            ]
        },
        {
            id: 9,
            name: 'Ford Mustang Boss 429',
            year: "1969-1970",
            location: 'Dearborn, Michigan, USA',
            images: ['images/ArticlesPhotos/car9.png', 'images/DetailCarPhotos/1_boss_429.png', 'images/DetailCarPhotos/2_boss_429.png', 'images/DetailCarPhotos/3_boss_429.png'],
            descriptions: [
                'The Ford Mustang Boss 429, produced from 1969 to 1970, is one of the most iconic and powerful muscle cars of the 1960s. Designed for NASCAR homologation, the Boss 429 was powered by a 429 cubic-inch (7.0L) V8 engine, capable of producing up to 375 horsepower, which was a significant increase over the standard Mustang engines of the time. The engine was a modified version of the famous Hemi engine, built by the legendary Kar Kraft engineering team, and it was housed in a reinforced Mustang body with a unique "shaker" hood scoop. This was Ford’s answer to the competitive muscle car market and the rising popularity of high-performance engines in racing.',
                'The Boss 429 was built in limited numbers, with only 1,358 units produced during its two-year run. It came equipped with a four-speed manual transmission and was offered in a variety of vibrant colors, with the most popular being the iconic Grabber Orange. Its performance capabilities were impressive, with a 0 to 60 mph time of around 6.7 seconds, making it one of the fastest cars of its era. The handling and braking systems were also upgraded to handle the immense power of the V8 engine, which made the Boss 429 a formidable competitor on both the street and the track.',
                'The Ford Mustang Boss 429 quickly became a legend, cherished by enthusiasts and collectors alike. While the production numbers were small, the impact of the Boss 429 on American muscle car culture was immense. It was a true symbol of performance, engineering, and the rebellious spirit of the late 1960s. Today, the Boss 429 is one of the most sought-after Mustangs by collectors, often fetching astronomical prices at auctions due to its rarity and unique history. Its combination of brute power and striking looks ensures that the Boss 429 remains an enduring icon in the world of classic American muscle cars.'
            ]
        },
        {
            id: 10,
            name: 'Aston Martin DB5',
            year: "1963-1965",
            location: 'Gaydon, Warwickshire, England',
            images: ['images/ArticlesPhotos/car10.png', 'images/DetailCarPhotos/1_db5.png', 'images/DetailCarPhotos/2_db5.png', 'images/DetailCarPhotos/3_db5.png'],
            descriptions: [
                'The Aston Martin DB5, produced from 1963 to 1965, is one of the most iconic and revered British luxury sports cars of all time. With its elegant design and refined craftsmanship, the DB5 became the quintessential grand tourer of the 1960s. Powered by a 4.0L inline-six engine, the DB5 produced 282 horsepower, which allowed it to reach a top speed of 145 mph, making it one of the fastest production cars of its era. Its sophisticated combination of power, performance, and luxury made the DB5 a favorite among high-profile personalities and car enthusiasts alike.',
                'The DB5 gained worldwide fame thanks to its appearance in the James Bond film "Goldfinger" (1964), where it became the ultimate spy car equipped with numerous gadgets such as machine guns, an ejector seat, and an oil slick dispenser. The association with 007 made the DB5 a symbol of both elegance and danger, forever cementing its place in popular culture. In addition to its cinematic fame, the DB5’s stylish design, including its smooth, curvaceous bodywork, wire-spoke wheels, and luxurious interior, set the standard for future Aston Martin models and established the brand’s reputation for blending performance with beauty.',
                'Despite its relatively short production run, the DB5 left a lasting impact on the automotive world and is still highly regarded today for its classic beauty and performance. Only 1,059 units were produced, making it a rare collector’s item. The DB5 remains one of the most sought-after vintage cars, with its price continuing to climb at auctions. Its blend of elegance, performance, and cinematic history ensures that the Aston Martin DB5 continues to be one of the most admired and beloved cars of the 1960s and a true symbol of British automotive excellence.'
            ]
        },
        {
            id: 11,
            name: 'Volkswagen Beetle Type 1',
            year: "1938-2003",
            location: 'Wolfsburg, Germany',
            images: ['images/ArticlesPhotos/car11.png', 'images/DetailCarPhotos/1_beetle.png', 'images/DetailCarPhotos/2_beetle.png', 'images/DetailCarPhotos/3_beetle.png'],
            descriptions: [
                'The Volkswagen Beetle Type 1, also known as the "Bug," is one of the most iconic and enduring cars in automotive history. Produced from 1938 to 2003, the Beetle is recognized for its distinctive round shape, rear-engine layout, and accessible design. Originally developed by Ferdinand Porsche under commission from Adolf Hitler to create an affordable car for the masses, the Beetle became the best-selling car of all time, with more than 21 million units sold worldwide. Its simplicity and reliability made it a favorite for people of all ages and backgrounds.',
                'The Beetle’s design was revolutionary in its time, offering an affordable yet durable car with a small, efficient engine. Initially powered by a 1.1L air-cooled engine, the Beetle’s modest performance (around 25 horsepower) didn’t hinder its popularity. The car became a symbol of freedom and counterculture in the 1960s, especially in the United States, where it was embraced by hippie communities. Throughout the years, the Beetle underwent subtle updates but largely retained its classic design, which continued to appeal to fans worldwide.',
                'The Volkswagen Beetle Type 1 not only represented practicality and ease of maintenance but also became a symbol of style and culture. Its status as a pop-culture icon was reinforced by appearances in films, advertisements, and music. Despite its discontinuation in 2003, the Beetle’s legacy lives on, with classic models still being cherished by collectors and enthusiasts. The Beetle remains a beloved car, representing the spirit of simplicity, fun, and innovation, making it an enduring part of automotive history.'
            ]
        },
        {
            id: 12,
            name: 'Mercedes-Benz 300 SL Gullwing',
            year: "1954-1963",
            location: 'Stuttgart, Germany',
            images: ['images/ArticlesPhotos/car12.png', 'images/DetailCarPhotos/1_300sl.png', 'images/DetailCarPhotos/2_300sl.png', 'images/DetailCarPhotos/3_300sl.png'],
            descriptions: [
                'The Mercedes-Benz 300 SL Gullwing is one of the most iconic cars in automotive history. Produced from 1954 to 1963, the 300 SL is renowned for its distinctive gullwing doors, which open upward, setting it apart from other vehicles of the time. This car was a revolutionary design, combining elegance with cutting-edge engineering. It was originally conceived as a racing car but became a legend thanks to its advanced technology, impressive performance, and timeless style.',
                'Under the hood, the 300 SL was powered by a 3.0-liter inline-six engine, producing 215 horsepower, which enabled the car to reach top speeds of around 160 mph (260 km/h)—a remarkable achievement for the era. It featured a lightweight tubular frame, a technology borrowed from racing cars, and was equipped with an innovative fuel injection system that provided better performance and efficiency than most competitors. The 300 SL was a true sports car, offering both speed and luxury, and it quickly became a favorite among collectors and enthusiasts.',
                'The 300 SL Gullwing’s success in motorsport, particularly in endurance racing, further solidified its legendary status. It was instrumental in establishing Mercedes-Benz as a leader in automotive engineering. Today, the 300 SL remains one of the most coveted classic cars in the world, with prices reaching record-breaking levels at auctions. Its combination of advanced technology, iconic design, and racing pedigree ensures its place in automotive history as a symbol of excellence and innovation.'
            ]
        }
    ];

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
                <img src="${car.images[0]}" alt="${car.name}" class="car-image"> <!-- Используем первое изображение из массива -->
                <div class="car-info">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-year">Year: ${car.year}</p>
                    <p class="car-location">Location: ${car.location}</p>
                </div>
            `;
            carCard.addEventListener('click', () => {
                window.location.href = `car-detail.html?id=${car.id}`;
            });
            carsGrid.appendChild(carCard);
        });
    }

    // Check if on the "car detail" page
    if (carTitle) {
        // Get car id from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('id');
        const car = cars.find(c => c.id === parseInt(carId));

        if (car) {
            // Set the title
            carTitle.textContent = car.name;

            // Set first paragraph
            carParagraph1.textContent = car.descriptions[0];

            // Set second paragraph and images
            carParagraph2.textContent = car.descriptions[1];
            carImage2.src = car.images[1];
            carImage3.src = car.images[2];

            // Set third paragraph and last image
            carParagraph3.textContent = car.descriptions[2];
            carImage4.src = car.images[3];
        }
    }
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

            console.log('Payment Information:', data);
            alert('Данные успешно отправлены!');
        } else {
            alert('Пожалуйста, исправьте ошибки в форме!');
        }
    });
    }
});