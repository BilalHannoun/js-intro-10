function getInfo() {
<<<<<<< HEAD
    console.log(`${this.fullname} is ${this.age} years old.`);
}

getInfo(); //undefined is undefined years old.

const obj = {
    fullname: 'Morgan James',
    age: 30
=======
  console.log(`${this.fullname} is ${this.age} years old.`);
}

getInfo(); // undefined is undefined years old.

const obj = {
  fullname: 'Morgan James',
  age: 30
>>>>>>> 8af944854bf2d779d746a4ad0d968d8037056b89
}

getInfo.call(obj); // Morgan James is 30 years old.
getInfo.apply(obj); // Morgan James is 30 years old.

// bind returns another function with the this keyword and body defined
const func = getInfo.bind(obj); // 

func(); // Morgan James is 30 years old.