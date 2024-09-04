

const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true


console.log(numbers.some((number) => number % 5 === 0));// check if some elements are divisible by 5 -> true
console.log(numbers.every((number) => number > 0));// check if every element is positive -> false
console.log(numbers.some((number) => number < 0));// check if some elements are negative -> true