


//function declaration

function printHello() {
    console.log('Hello');
}



//Arrow function
const printHola = () => {
    console.log('Hello');
}


//Enhanced Arrow function when there is only 1 line of code within the body
const product = (a, b) => a * b  //return type
const printHello1 = () => console.log('Hello') //Void

const arr = [40, 30, 2, -5];

const funcName = (a, b) => a - b;

arr.sort(funcName);
arr.sort((a, b) => a - b);

function func1(a, b) {
    return a - b;
}

const product1 = (a, b) => a * b; //return type
const sayHello = () => console.log('Hello'); //Void



function getInfo() {
    console.log('Today is Saturday');
}

function greet(func) {
    console.log('Hello');
    func();
}

greet(getInfo);

