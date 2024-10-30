/**
 * Requirement:
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15)  -> "FizzBuzz"
 */

function fizzBuzz1 (num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
}

console.log ("\n------------Task-1------------\n");
console.log (fizzBuzz1(0) );
console.log (fizzBuzz1(1));
console.log (fizzBuzz1(3));
console.log (fizzBuzz1(5));
console.log (fizzBuzz1(30));
console.log (fizzBuzz1(10));




/**
 * Requirement:
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)  -> [ 1, 2 ]
 * 
 */

function fizzBuzz2 (num) {
    arr = [];

    for (let i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) arr.push(i)
        else if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
        else if (i % 3 === 0) arr.push('Fizz');
        else if (i % 5 === 0) arr.push('Buzz');
    }

    return arr
}

console.log ("\n------------Task-2------------\n");
console.log (fizzBuzz2(3));
console.log (fizzBuzz2(5));
console.log (fizzBuzz2(10));
console.log (fizzBuzz2(15));
console.log (fizzBuzz2(2));




/**
 * Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
 * 
 */

function findSumNumbers (str) {
    let arr = str.match(/\d+/g);

    if(!arr) return 0;

    let sum = arr.reduce((acc, curr) => acc + parseInt(curr), 0)
    return sum
}
    
console.log ("\n------------Task-3------------\n");
console.log (findSumNumbers("abc$"));
console.log (findSumNumbers("a1b4c  6#"));
console.log (findSumNumbers("ab110c045d"));
console.log (findSumNumbers("525"));
console.log (findSumNumbers("3 for 10 dollars"));

// solution 2

const findSumNums = str => {
let arrOfNumbers = str.split(/\D+/)

return arrOfNumbers.reduce((total, ele) => ele ? total + Number(ele) : total, 0)
}




/**
 * Requirement:
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")  -> 10
 */

function findBiggestNumber (str) {
    let arr = str.match(/\d+/g);
    
    if (!arr) return 0;

    arr = arr.map(num => parseInt(num));
    return Math.max(...arr);
}

console.log ("\n------------Task-4------------\n");
console.log (findBiggestNumber("abc$"));
console.log (findBiggestNumber("a1b4c  6#"));
console.log (findBiggestNumber("ab110c045d"));
console.log (findBiggestNumber("525"));
console.log (findBiggestNumber("3 for 10 dollars"));




/**
 * Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
 */

function countOccurrencesOfCharacters (str) {
    if(str === '') return '';

    let counter = 1;
    let arr = [];


    for(let i = 1; i <= str.length; i ++) {
        if(str[i] === str[i - 1]) {
            counter ++;
        }else {
            arr.push(counter + str[i - 1]); counter = 1;
        }
    }

    return arr.join('');
}

console.log ("\n------------Task-5------------\n");
console.log (countOccurrencesOfCharacters(""));
console.log (countOccurrencesOfCharacters("abc"));
console.log (countOccurrencesOfCharacters("abbcca"));
console.log (countOccurrencesOfCharacters("aaAAa"));
console.log (countOccurrencesOfCharacters("www" ));




/**
 * Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
 */

function fibonacciSeries1 (n) {
    if(n <= 0)return [];
    
    let fibSeries = [0, 1];
    
    if(n === 1) return [0];
    if(n === 2) return fibSeries.slice(0, 2);

    for(let i = 2; i < n; i++) fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    
    return fibSeries;
}

console.log ("\n------------Task-6------------\n");
console.log (fibonacciSeries1(3));
console.log (fibonacciSeries1(5));
console.log (fibonacciSeries1(7));
console.log (fibonacciSeries1(8));
console.log (fibonacciSeries1(1));
console.log (fibonacciSeries1(2));




/**
 * Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
 */

function fibonacciSeries2 (n) {
    if(n <= 0) return null;
    if(n === 1) return 0;
    if(n === 2) return 1;

    let a = 0, b = 1;

    for(let i = 3; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}

console.log (fibonacciSeries2(2));
console.log (fibonacciSeries2(4));
console.log (fibonacciSeries2(8));
console.log (fibonacciSeries2(9));
console.log (fibonacciSeries2(1));




/**
 * Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
 */

function findUniques (arr1, arr2) {
    if(arr1.length === 0 && arr2.length === 0) {
        return [];
    }

    const combinedArray = [...arr1, ...arr2];

    return combinedArray.filter(value => 
        combinedArray.indexOf(value) === combinedArray.lastIndexOf(value)
    );
}

console.log(findUniques([], [])); // Wrong
console.log(findUniques([], [1, 2, 3, 2])); // Wrong
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));




/**
 * Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
 */

function isPowerOf3(num) {
    if (num < 1) return false;

    while (num % 3 === 0) num /= 3;

    return num === 1;
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));