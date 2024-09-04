function printName() {
    console.log(`The fullname is ${this.fname} ${this.lname}!`);
}

printName();

const student = {
    fname: 'Alex',
    lname: 'Smith'
};

const instructor = {
    fname: 'John',
    lname: 'Doe'
};

printName.call(student); // The full name is Alex Smith!
printName.apply(student); // The full name is Alex Smith!

printName.call(instructor); // The full name is John Doe!
printName.apply(instructor); // The full name is John Doe!



function sum (num1, num2) {
    console.log(`${this.fullname} did the sum = ${num1 + num2}`);
}

sum(3, 5);

const student1 = {
    fullname: 'Mark Steve',
};

const student2 = {
    fullname: 'Morgan J.'
};

sum.call(student1, 5, 10); // Mark Steve did the sum = 15
sum.apply(student1, [ 5, 10 ]); // Mark Steve did the sum = 15