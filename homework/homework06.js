console.log("\n------------Task-1------------\n");
/*
Requirement:
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/

function noSpace(str) {
    return str.split(/\s+/).join('');
}

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));




console.log("\n------------Task-2------------\n");
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> ""
*/

function replaceFirstLast(str) {
    let arr = str.trim().split('');

    if(arr.length < 2) return '';
    return arr[arr.length - 1].toString() + str.slice(1, arr.length - 1) + arr[0].toString();
}

console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));




console.log("\n------------Task-3------------\n");
/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/

function hasVowel(str) {
    if(str.toLowerCase().includes('a' || 'e' || 'i' || 'o' || 'u')) return true;
    return false;
}

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));




console.log("\n------------Task-4------------\n");
/*
Requirement:
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/

function checkAge(num) {
    if(2024 - num > 120 || 2024 - num < 0) return 'AGE IS NOT VALID';
    else if(2024 - num < 16) return 'AGE IS NOT ALLOWED';
    return 'AGE IS ALLOWED';
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));




console.log("\n------------Task-5------------\n");
/*
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/

function averageOfEdges(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);

    return (max + min) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));




console.log("\n------------Task-6------------\n");
/*
Requirement:
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", "###"]
*/

function noA(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().startsWith('a')) newArr.push('###');
        else newArr.push(arr[i]);
    }

    return newArr;
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));




console.log("\n------------Task-7------------\n");
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/

function no3and5(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 5 === 0 && arr[i] % 3 !== 0) newArr.push(99);
        else if(arr[i] % 3 === 0 && arr[i] % 5 !== 0) newArr.push(100);
        else if(arr[i] % 3 === 0 && arr[i] % 5 === 0) newArr.push(101);
        else newArr.push(arr[i])
    }

    return newArr;
}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));




console.log("\n------------Task-8------------\n");
/*
Requirement:
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

function countPrimes(arr) {
    let primeNums = []

    for(let i = 0; i < arr.length; i++) {
        for(let j = 2; j < arr[i]; j++ )
            if(arr[i] === 2) primeNums.push(arr[i]);
            else if(arr[i] % j !== 0) primeNums.push(arr[i]);
    }

    return primeNums;
}

console.log(countPrimes([-10, -3, 0, 1]))
console.log(countPrimes([7, 4, 11, 23, 17]))
console.log(countPrimes([41, 53, 19, 47, 67]))

