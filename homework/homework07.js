/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

function hasUpperCase(str) {
    str.split('');

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[i].toLowerCase()) return true;
    }

    return false;
}

console.log("\n------------Task-1------------\n");
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

//solution 2 : Regex practice

function hasUpperCase2(str) {
    if(/[A-Z]/.test(str)) return true;
    return false;
}

console.log("\n------------Task-1-Solution-2------------\n");
console.log(hasUpperCase2("javascript"));
console.log(hasUpperCase2("John"));
console.log(hasUpperCase2("$125.0"));
console.log(hasUpperCase2(""));




/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

function noDigit(str) {
    let arr = [];
    str.split('');

    for(let i = 0; i < str.length; i++) {
        if(isNaN(str[i]) || str[i] == ' ') arr.push(str[i]);
    }

    return arr.join('');
}

console.log("\n------------Task-2------------\n");
console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

//solution 2: concatenation

function noDigits(str) {
    let arr = '';
    str.split('');

    for(let i = 0; i < str.length; i++) {
        if(isNaN(str[i]) || str[i] == ' ') arr += str[i];
    }

    return arr;
}

console.log("\n------------Task-2-Solution-2------------\n");
console.log(noDigits(""));
console.log(noDigits("Javascript"));
console.log(noDigits("123Hello"));
console.log(noDigits("123Hello World149"));
console.log(noDigits("123Tech456Global149"));




/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

function noVowel(str) {
    let newStr = '';
    str.split('');

    for(let i = 0; i < str.length; i++) {
        if(!/[aeiou]/i.test(str[i])) newStr += str[i];
    }

    return newStr;
}

console.log("\n------------Task-3------------\n");
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));




/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

function no13(arr) {
    let str = arr.join(' ');
    return str.replaceAll('13', '0').split(' ');
}

console.log("\n------------Task-4------------\n");
console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));




/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

function middleInt(n1, n2, n3) {
    let nums = [n1, n2, n3];
    return nums.sort((x, y) => x - y)[1];
}

console.log("\n------------Task-5------------\n");
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));




/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

function sumOfDigits(str) {
    let sum = 0;
    str.split('');

    for(let i = 0; i < str.length; i++) {
        if(/[0-9]/.test(str[i])) sum += Number(str[i]);
    }

    return sum;
}

console.log("\n------------Task-6------------\n");
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));




/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/

function arrFactorial(arr) {
    return arr.map(function(num) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
        return result; 
    });
}

console.log("\n------------Task-7------------\n");
console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));




/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/

function categorizeCharacters(str) {
    str.split('');
    let words = '';
    let nums = '';
    let syms = '';

    for(let i = 0; i < str.length; i++) {
        if(/[a-z]/i.test(str[i])) words += str[i];
        else if(/[0-9]/.test(str[i])) nums += str[i];
        else if(/[!@#$%^&*(),.?":{}|<>]/.test(str[i])) syms += str[i];
    }

    let arr = [words, nums, syms];
    return arr;
}

console.log("\n------------Task-8------------\n");
console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));

