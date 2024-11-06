// Task-1: Function to return negative value of a number
function makeNegative(num) {
    return num < 0 ? num : -num;
}


console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0)); 
console.log(makeNegative(0.45));


// Task-2: Function to determine if the sum of three numbers is even or odd
function isSumEvenOrOdd(a, b, c) {
    const sum = a + b + c;
    return sum % 2 === 0 ? "even" : "odd";
}


console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));


// Task-3: Function to round numbers in an array to two decimal places
function decimal2(arr) {
    return arr.map(num => Number(num.toFixed(2)));
}


console.log(decimal2([94.356, 8.9752]));
console.log(decimal2([76.62, 128.4, 84]));
console.log(decimal2([20987, 3.53245, 12.345, 32.9]));
console.log(decimal2([]));
console.log(decimal2([4.35623, 8.9742]));


// Task-4: Function to calculate x to the power of n without Math.pow()
function myPow(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    let result = 1;
    for (let i = 0; i < Math.abs(n); i++) {
        result *= x;
    }
    return n < 0 ? 1 / result : result;
}


console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));


// Task-5: Function to find the longest word in a string
function findLongestWord(str) {
    if (!str.trim()) return "";
    const words = str.split(/\s+/);
    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("      "));