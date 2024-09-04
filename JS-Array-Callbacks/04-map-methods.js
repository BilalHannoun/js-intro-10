const numbers = [5, 3, 2, 20];

const oddOrEven = numbers.map((number) => number % 2 === 0 ? 'even' : 'odd');

console.log(oddOrEven);

const oddEven = []

for(let i = 0; i < numbers.length; i ++) {
    if(number % 2 === 0) oddEven.push('even');
    else oddEven.push('odd')
}

console.log(oddEven);

const sentences = ['Good morning', 'I like arrays', 'Today is Saturday']

console.log(sentences.map((str) => str.split(' ')[0]))
