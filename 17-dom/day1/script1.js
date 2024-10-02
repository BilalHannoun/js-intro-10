console.log('This is a JavaScript File');

// test/qa, dev, prod(no error)

// client, server

/**
 * window
 */
console.log('window', window); // window in client environment is an object
console.log(typeof window); // object

// In server side window is undefined

/**
 * Alert
 */

window.alert('Hi')
const alertAns = alert('How old are you?');
console.log(alertAns);


/**
 * Prompt
 */

const ans = prompt('How are you today?');
console.log(ans); 

/**
 * Confirm
 */

const confirmAns = confirm('Are you sure?');
console.log(confirmAns); // True or False

/**
 * innerHeight and innerWidth
 */

console.log(innerHeight); // number
console.log(innerWidth); // number

/**
 * LocalStorage
 * - setItem()
 * - getItem()
 * - removeItem()
 * - clear()
 */

localStorage.setItem('username', 'tg20');

const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020');
localStorage.setItem('username3', 'tg202020');

localStorage.clear();