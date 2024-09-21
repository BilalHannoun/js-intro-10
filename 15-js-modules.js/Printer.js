function print(str) {
    console.log(`Your string is = ${str}`);
}

//const print = (str) => console.log(`Your string is = ${str}`);


function printFullName(first, last) {
    console.log(`${first} ${last}`);
}

function printSum (n1, n2) {
    console.log(`Sum is = ${n1 + n2}`);
}

// Export all these methods individually
module.exports.print = print;
module.exports.printFullName = printFullName;
module.exports.printSum = printSum;