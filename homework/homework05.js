console.log("\n------------Task-01------------\n");
/*
Requirement:

Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 

Examples:

countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

function countPos(arr) {
    let posNums = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) posNums++;
    }

    return posNums;
} 





console.log("\n------------Task-02------------\n");
/*
Requirement:

Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.

NOTE: 

Ignore case sensitivity. 

Examples:

countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/

function countA(str) {
    let string = str.toLowerCase().split('');
    let counter = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] == 'a') counter++;
    }
    
    return counter;
}




console.log("\n------------Task-03------------\n");
/*
Requirement: 

Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.

NOTE: 

Vowel letters are A,E, O, U, I, a, e, o, u, i

Examples:

countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/

function countVowels(str) {
    let string = str.toLowerCase().split('');
    let counter = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') counter++;
    }
    
    return counter;
}




console.log("\n------------Task-04------------\n");
/*
Requirement: 

Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.

NOTE:

A letter that is not vowel is considered as a consonant 
letter.

Examples:

countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/

function countConsonants(str) {
    let string = str.toLowerCase().split('');
    let counter = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u') counter++;
    }
    
    return counter;
}




console.log("\n------------Task-05------------\n");
/*
Requirement:

Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.

NOTE: 

Be careful about the extra whitespaces before 
and after the string.

Examples:

countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 
countWords("1 2 3 4") -> 4
*/

function countWords(str) {
    let words = str.trim().split(/\s+/);
    return words.length;
}




console.log("\n------------Task-06------------\n");
/*
Requirement:

Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.

NOTE: 

Mathematically, the factorial of a non-negative 
integer n is defined as:

n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.

Examples:

factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

function factorial(num) {
    for(i = num; i > 1; i--) {
        if(num > i) num *= i;
    }
    return num
}




console.log("\n------------Task-07------------\n");
/*
Requirement: 

Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.

NOTE: 

Palindrome: It is a word that is read the same backward 
as forward (Examples: kayak, civic, madam)

NOTE: 

your function should ignore case sensitivity

Examples:

isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

function isPalindrome(str) {
    let reverse = str.split('').reverse().join('');

    if(str.toLowerCase() === reverse.toLowerCase()) return true;
    else return false;
}




console.log("\n------------Task-08------------\n");
/*
Requirement: 

Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.

NOTE: 

Be careful about the extra whitespaces before and after 
the array element.

Examples:

countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> 4
countMultipleWords([ ]) -> 0
*/

function countMultipleWords(arr) {
    let counter = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].trim().includes(' ')) counter++;
    }
    
    return counter;
}




console.log("\n------------Task-09------------\n");
/*
Requirement: 

Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.

Examples:

count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/

function count3OrLess(str) {
    let words = str.trim().split(/\s+/);
    let counter = 0;

    for(let i = 0; i < words.length; i++) {
        if(words[i].length <= 3) counter++;
    }

    return counter;
}




console.log("\n------------Task-10------------\n");
/*
Requirement:

Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.

NOTE: 

Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

NOTE: 

The smallest prime number is 2 and there is no 
negative prime numbers.

Examples:

isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

function isPrime(num) {
    if(num === 2) return true;

    for(let i = 2; i < num; i--) {
        if(num % i === 0) return false;
        else return true;
    }
}




console.log("\n------------Task-11------------\n");
/*
Requirement:

Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.

NOTE: 

Be careful about the array sizes as they could be 
different.

Examples:

add([3, 0, 0, 7, 5, 10], [6, 3, 2] )                    -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])    -> [16, 11, 9, 3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])                   -> [0, 0, 0, 0]
*/

function add(arr1, arr2) {
    let min = Math.min(arr1.length, arr2.length);

    for(let i = 0; i < min; i++) {
        if(arr1.length > arr2.length) arr1[i] += arr2[i];
        else if(arr2.length > arr1.length) arr2[i] += arr1[i];
        else arr1[i] += arr2[i];
    }

    if(arr2.length > arr1.length) return arr2;
    return arr1;
}




console.log("\n------------Task-12------------\n");
/*
Requirement: 

Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.

Examples:

removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> ""
*/

function removeExtraSpaces(str) {
    return str.trim().split(/\s+/).join(' ');
}




console.log("\n------------Task-13------------\n");
/*
Requirement: 

Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.

NOTE: 

- Assume that length of array is always more than zero.
- Ignore the 10 itself.
- If there are more than one numbers are close equally, 
return the smaller number.

Examples:

findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

function findClosestTo10(arr) {
    const array = arr.filter(num => num !== 10);

    const closestNum = array.reduce((acc, curr) => {
        const currentDiff = Math.abs(10 - curr);
        const closestDiff = Math.abs(10 - acc);
        
        if (currentDiff < closestDiff || (currentDiff === closestDiff && curr < acc)) return curr;
        else return acc;
    });

    return closestNum;
}




console.log("\n------------Task-14------------\n");
/*
Requirement: 

Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.

NOTE: A VALID EMAIL:

•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least 2 characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.

Examples:

isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

function isEmailValid(str) {
    if (str.includes(" ")) return false;

    const indexOfAt = str.indexOf("@");
    if (indexOfAt === -1 || str.indexOf("@", indexOfAt + 1) !== -1) {
        return false;
    }

    const beforeAt = str.substring(0, indexOfAt);
    const afterAt = str.substring(indexOfAt + 1);
    const dotIndex = afterAt.lastIndexOf(".");

    if (beforeAt.length < 2 || dotIndex < 2 || dotIndex === afterAt.length - 1) {
        return false;
    }

    const domainName = domainPart.substring(0, dotIndex);
    const domainExtension = domainPart.substring(dotIndex + 1);

    if (domainName.length < 2 || domainExtension.length < 2) {
        return false;
    }

    return true;
}




console.log("\n------------Task-15------------\n");
/*
Requirement: 

Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:

•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.

Examples:

isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/

function isPasswordValid(str) {
    if(str.includes(' ')) return false;

    if(str.length < 8 || str.length > 16) return false;

    const hasDigit = /[0-9]/.test(str);
    const hasUppercase = /[A-Z]/.test(str);
    const hasLowercase = /[a-z]/.test(str);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);
    const hasSpace = /\s/.test(str);

    return hasDigit && hasUppercase && hasLowercase && hasSpecialChar && !hasSpace;
}
