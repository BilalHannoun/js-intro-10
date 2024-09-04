const objects = [ 'Remote', 'Computer', 'TV', 'Mouse', 'Notebook', 'AC'];

// the shortest --> get the first shortest      --> TV
// the longest  --> get the last longest        -->Notebook


let shortestObj = objects.reduce((acc, curr) => {
    if(curr.length < acc.length) return curr;
    return acc;
})

console.log(shortestObj);




let longestObj = objects.reduce((acc, curr) => {
    if(curr.length < acc.length) return acc;
    return curr;
})

console.log(longestObj);
