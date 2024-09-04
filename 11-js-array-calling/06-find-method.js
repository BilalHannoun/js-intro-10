const numbers = [0, 10, -4, 5, 2, -3];

// Find first positive
// Find first negative

// let firstPos;

// for(const number of numbers) {
//   if(number > 0) {
//     firstPos = number;
//     break;
//   }
// }

// console.log(firstPos);

let firstPos = numbers.find((number) => number > 0);

let firstPosIndex = numbers.findIndex((number) => number > 0);

console.log(firstPos); // 10
console.log(firstPosIndex); // 1


const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA']; 

// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let firstFour = cities.find((word) => word.length === 4);
let lastSix = cities.reverse().find((word) => word.length === 6);
cities.reverse()
let indexLA = cities.findIndex((word) => word === 'LA')
let indexOfI = cities.find((word) => word.toLowerCase().includes('i'))
let lastFour = cities.reverse().find((word) => word.length === 4);

console.log(firstFour);
console.log(lastSix);
console.log(indexLA);
console.log(indexOfI);
console.log(lastFour);




