

const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];

// Count evens = 4

let evenNums = numbers.reduce((acc, curr) => {
     if(curr % 2 === 0) return acc + 1;
     return acc;
}, 0);

console.log(evenNums);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

let apple = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().includes('apple')) return acc + 1;
    return acc;
}, 0);
// count how many elements has 'apple' ignoring cases   -> 2


let iCount = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().includes('i')) return acc + 1;
    return acc;
}, 0);
// count how many elements has 'i' ignoring cases       -> 2


let endsE = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().endsWith('e')) return acc + 1;
    return acc;
}, 0);
// count how many elements ends with 'e'                -> 3

console.log(apple);// 2
console.log(iCount);// 2
console.log(endsE);// 3


