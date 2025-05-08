// Показуємо/ховаємо інформацію про автора
document.getElementById('logo').addEventListener('mouseover', function() {
    document.getElementById('authorInfo').style.display = 'block';
});

document.getElementById('logo').addEventListener('mouseout', function() {
    document.getElementById('authorInfo').style.display = 'none';
});

// Калькулятор
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Будь ласка, введіть обидва числа!");
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Ділення на нуль неможливе!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Невідома операція";
    }

    document.getElementById('result').textContent = `Результат: ${result}`;
}

// Перевірка подільності
function checkDivisibility() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('divisibilityResult');

    if (isNaN(number) || number < 1) {
        alert("Будь ласка, введіть коректне натуральне число!");
        return;
    }

    const divisors = [2, 3, 5, 9, 10];
    let output = `<p>Число ${number}:</p><ul>`;

    divisors.forEach(divisor => {
        const isDivisible = number % divisor === 0;
        output += `<li>Подільність на ${divisor}: ${isDivisible ? 'Так' : 'Ні'}`;
        
        if (isDivisible) {
            output += ` (Ознака: ${getDivisibilityRule(divisor)})`;
        }
        
        output += `</li>`;
    });

    output += `</ul>`;
    resultDiv.innerHTML = output;
}

function getDivisibilityRule(divisor) {
    const rules = {
        2: "остання цифра парна",
        3: "сума цифр ділиться на 3",
        5: "остання цифра 0 або 5",
        9: "сума цифр ділиться на 9",
        10: "остання цифра 0"
    };
    return rules[divisor];
}

// НСД (алгоритм Евкліда)
function findGCD() {
    let a = parseInt(document.getElementById('gcdNum1').value);
    let b = parseInt(document.getElementById('gcdNum2').value);

    if (isNaN(a) || isNaN(b) || a < 1 || b < 1) {
        alert("Будь ласка, введіть коректні натуральні числа!");
        return;
    }

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    document.getElementById('gcdResult').textContent = `НСД: ${a}`;
}
function formatMoney() {
    const amount = parseInt(document.getElementById('moneyInput').value);
    if (isNaN(amount) || amount < 0) {
        alert("Введіть коректну суму!");
        return;
    }

    let word;
    const lastDigit = amount % 10;
    const lastTwoDigits = amount % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        word = "гривень";
    } else if (lastDigit === 1) {
        word = "гривня";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = "гривні";
    } else {
        word = "гривень";
    }

    document.getElementById('moneyResult').textContent = `${amount} ${word}`;
}

// 2. Очистка тексту
function cleanText() {
    const text = document.getElementById('textInput').value;
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    document.getElementById('textInput').value = cleanedText;
    document.getElementById('textResult').textContent = "Текст очищено!";
}

function countChars() {
    const text = document.getElementById('textInput').value;
    document.getElementById('textResult').textContent = `Символів: ${text.length}`;
}

// 3. Таймер
let timerInterval;
function startTimer() {
    const seconds = parseInt(document.getElementById('timerInput').value);
    if (isNaN(seconds)) {
        alert("Введіть кількість секунд!");
        return;
    }

    clearInterval(timerInterval);
    let timeLeft = seconds;

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        document.getElementById('timerDisplay').textContent = 
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').textContent = "Час вийшов!";
        } else {
            timeLeft--;
        }
    }, 1000);
}

// 4. Генератор кольорів
function generateColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorHex').textContent = `HEX: ${randomColor.toUpperCase()}`;
}