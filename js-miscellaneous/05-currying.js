function product (num1, num2) {
    return num1 * num2;
}

console.log(product(3, 5)); // 15
console.log(product(5, 5)); // 40


//currying
function multiply(num1) {
    return function (num2) {
        return num1 * num2
    }
}

const double = multiply(2);
const triple = multiply(3);


double(5);
triple(5);

console.log(double(5)); // 10
console.log(triple(5)); // 15





function doMath (operator) {
    if(operator === '+') {
        return function(n1, n2) {
            return n1 + n2;
        }
    }
    else if(operator === '*') {
        return function (n1, n2) {
            return n1 * n2;
        }
    }
    else if(operator === '**') {
        return function (n1, n2) {
            return n1 ** n2;
        }
    }
}

const power = doMath('**');
const sum = doMath('+');

console.log(power(5, 3)); // 125
console.log(sum( 11, 11)); // 22