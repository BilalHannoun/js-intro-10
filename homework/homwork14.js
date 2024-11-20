function repeatingX(string) {
    string = string.toLowerCase();
    return string.includes('xx');
}

function isPerfectSquare(num) {
    if (num < 0) return false;
    const root = Math.floor(Math.sqrt(num));
    return root * root === num;
}

function convertTemperature(temp, unit) {
    if (unit.toLowerCase() === 'celsius') {
        return (temp * 9 / 5) + 32;
    } else if (unit.toLowerCase() === 'fahrenheit') {
        return (temp - 32) * 5 / 9;
    } else {
        throw new Error('Invalid unit. Use "Celsius" or "Fahrenheit".');
    }
}

function sumOfEvenNumbers(array) {
    return array.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}

function capsOdds(array) {
    return array.map((element, index) => {
        return index % 2 !== 0 ? element.toUpperCase() : element;
    });
}