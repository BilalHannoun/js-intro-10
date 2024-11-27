
function toCamelCase(str) {
    let words = str.trim().split(/\s+/);
    return words
        .map((word, index) => {
            let lowerCaseWord = word.toLowerCase();
            return index === 0 ? lowerCaseWord : lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1);
        })
        .join('');
}





function toSnakeCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_');
}





function alternatingCases(str) {
    let result = '';
    let capitalize = true;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            result += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        } else {
            result += char;
        }
    }

    return result;
}




function isNeutral(str1, str2) {
    let result = '';

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            result += str1[i];
        } else {
            result += '0';
        }
    }

    return result;
}





function isTrueOrFalse(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const midpoint = 'm';
    const midpointIndex = alphabet.indexOf(midpoint);

    let positiveCount = 0;
    let negativeCount = 0;

    let words = sentence.match(/[a-zA-Z]+/g) || [];

    words.forEach(word => {
        let firstLetter = word[0].toLowerCase();
        if (alphabet.indexOf(firstLetter) <= midpointIndex) {
            positiveCount++;
        } else {
            negativeCount++;
        }
    });

    return positiveCount >= negativeCount;
}

console.log(toCamelCase("first name")); "
console.log(toCamelCase("   ZIP CODE"));
console.log(toSnakeCase("    I love Java Script"));
console.log(alternatingCases("Tech Global"));
console.log(isNeutral("-++-", "-+-+"));
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
