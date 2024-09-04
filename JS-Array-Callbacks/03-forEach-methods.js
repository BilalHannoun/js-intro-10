const names = ['James', 'John', 'Alex', 'Mariaa'];

console.log('\n---------iteration of arrays with for...of loop--------\n');
for(const name of names) {
    console.log(name);
}


console.log('\n---------iteration of arrays with for loop--------\n');

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


console.log('\n---------iteration of arrays with forEach loop--------\n');


const printName = function (name) {
    console.log(name);
}

names.forEach(printName);



console.log('\n---------iteration of arrays with forEach loop--------\n');

names.forEach((x) => console.log(x));

console.log('\n---------iteration of arrays with forEach method -Uppercase--------\n');
// Print each name upercased
names.forEach((name) => console.log(name.toUpperCase()));




console.log('\n---------iteration of arrays with forEach method -first last letter--------\n');
names.forEach((name) => {
    console.log(name[0] + name.at(-1));
});

names.forEach((name) => {
    let firstLetter = name[0];
    let lastLetter = name.at(-1);

    console.log(firstLetter + lastLetter);
});




console.log('\n---------iteration of arrays with forEach method -names with 4 letters--------\n');

/*
for(const name of names) {
    if(name.length === 4) console.log(name);
}
*/

names.forEach((name) => {
    if(name.length === 4) console.log(name);
});



console.log('\n---------iteration of arrays with forEach method -name lengths--------\n');

const nameLength = [];

names.forEach((name) => {
    nameLength.push(name.length);
})

console.log(nameLength);


console.log('\n---------iteration of arrays with map method -name lengths--------\n');

console.log(names.map((x) => x.length));
