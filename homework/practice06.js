console.log('\n---------------TASK-1-----------------\n');
/*
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])                         -> 1
*/

const arrayNum = [-2, 0, -7, 10, -5]
function firstPos(arrayNum) {
    for(let i = 0; i < arrayNum.length; i++){
        if(arrayNum[i] > 0) return arrayNum[i]

    } 
}

console.log(firstPos(arrayNum));

console.log('\n---------------TASK-2-----------------\n');
/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

function lastNeg(array) {
    for(let i = array.length -1; i >= 0; i--){
        if(array[i] < 0) return array[i]
    }
}

console.log(lastNeg([0, 3, -9,  -5, 8]));


console.log('\n---------------TASK-3-----------------\n');
/*
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

function firstLongest(array) {
let longest = array[0];

    for(let i = 1; i < array.length; i++){
        if (array[i].length > longest.length) longest = array[i];
    } 
    return longest;
}

console.log(firstLongest(["Apple", "Banana", "Orange"]));

console.log('\n---------------TASK-4-----------------\n');
/*
 Requirement:
Write a function named as lastShortest() which takes 
an array as an argument and returns the shortest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the shortest count 
of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])  -> 
"red"
lastShortest(["Apple", "Banana", "Mango"])  -> 
"Mango"
lastShortest(["white", "yellow", "brown"])  -> 
"brown
 */

function lastShortest(array) {
    let shortest = array[array.length - 1];
    
        for(let i = array.length - 1; i >= 0; i--){
            if (array[i].length < shortest.length) shortest = array[i];
        } 
        return shortest;
    }
    
    console.log(lastShortest(["white", "yellow", "brown"]));

console.log('\n---------------TASK-5-----------------\n');

 /*
Requirement:
Write a function named as max() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8])  -> 8
max([-2, 0, -7, 10, -5])  -> 10
max([1, 2, 3, -2])                 -> 3
 */

function max(array) {
    let greatest = array[0];
    
        for(let i = 1; i < array.length; i++){
            if (array[i] > greatest) greatest = array[i];
        } 
        return greatest;
    }
    
    console.log(max([0, 3, -9,  5, 8]));

console.log('\n---------------TASK-6-----------------\n');
/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
*/
function min(array) {
    let least = array[0];
    
        for(let i = 1; i < array.length; i++){
            if (array[i] < least) least = array[i];
        } 
        return least;
    }
    
    console.log(min([0, 3, -9,  5, 8]));

console.log('\n---------------TASK-7-----------------\n');
/*
Requirement:
Write a function named as commonElements() which takes 2 arrays 
as arguments and returns the all the matching elements from the 
both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])  -> [ 20, 
50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])  -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])  -> 
["abc" ] 
*/

function commonElements(arr1, arr2){
    let dup = [];
    // let container = []
    for(let ele of arr1){
        if((arr1.includes(ele) && arr2.includes(ele))) dup.push(ele)
        //else if(!dup.includes(ele)) dup.push(ele)
    }
    return dup;
}
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]))