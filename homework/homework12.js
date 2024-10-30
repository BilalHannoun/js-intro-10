console.log("\n------------Task-01------------\n");
function countPalindrome(sentence) {
    let words = sentence.toLowerCase().split(" ");
    return words.filter(word => word === word.split("").reverse().join("")).length;
}



console.log("\n------------Task-02------------\n");
function sum(arr, isEvenIndex) {
    return arr.reduce((total, num, index) => {
        return (isEvenIndex && index % 2 === 0) || (!isEvenIndex && index % 2 !== 0) 
               ? total + num 
               : total;
    }, 0);
}



console.log("\n------------Task-03------------\n");
function nthChars(str, n) {
    let result = '';
    for (let i = n - 1; i < str.length; i += n) {
        result += str[i];
    }
    return result;
}



console.log("\n------------Task-04------------\n");
function canFormString(str1, str2) {
    let sorted1 = str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    let sorted2 = str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    return sorted2.split('').every(char => sorted1.includes(char));
}



console.log("\n------------Task-05------------\n");
function isAnagram(str1, str2) {
    let sorted1 = str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    let sorted2 = str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    return sorted1 === sorted2;
}



console.log("\n------------Task-06------------\n");
function count(arr, countEven) {
    return arr.filter(num => (countEven ? num % 2 === 0 : num % 2 !== 0)).length;
}



console.log("\n------------Task-07------------\n");
function sumDigitsDouble(str) {
    let digits = str.match(/\d/g);
    if (!digits) return -1;
    return digits.reduce((sum, digit) => sum + (2 * parseInt(digit)), 0);
}



console.log("\n------------Task-08------------\n");
function countOccurrence(str1, str2) {
    let count = 0;
    let tempStr = str1.toLowerCase();
    for (let char of str2.toLowerCase()) {
        if (tempStr.includes(char)) {
            tempStr = tempStr.replace(char, '');
            count++;
        }
    }
    return count >= str2.length ? Math.floor(count / str2.length) : 0;
}