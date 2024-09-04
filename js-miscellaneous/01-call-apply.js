/*
this keyword
*/

function hi(str) {
    console.log(`Hi, ${str}`);
}

const instructor = {
    name: 'John Doe'
}

hi('Data');

hi.call(instructor, instructor.name);