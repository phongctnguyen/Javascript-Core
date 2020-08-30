// First function
function hello() {
  console.log('Hello');
}

hello();

// Dice roll function
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

rollDice();

// Function with args
function greet(name) {
  console.log(`Hello ${name}`);
}

greet('Phong');

function multi(x, y) {
  console.log(x * y);
}

multi(3, 4);

function add(a, b) {
  return a + b;
}

const total = add(4, 5);
console.log(total);

function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
  } else {
    return false;
  }
}

console.log(isPurple('purple'));
console.log(isPurple('red'));

// function scope
function lol() {
  let person = 'Tom';
  const age = 26;
  var color = 'teal';
}

// block scope
if (true) {
  let a = 5;
  console.log(a);
}

// lexical scope
function outer() {
  let name = 'phong';

  function inner() {
    console.log(name.toUpperCase());
  }

  inner();
}

outer();

// function expression
const sum = function (x, y) {
  return x + y;
};

console.log(sum(2, 5));

// higher order function
function rage() {
  console.log('RAGE');
}

// function as arguments
function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 5);

// function return function
function multiplyBy(num) { 
  return function (x) {
    return x * num;
  };
}

console.log(multiplyBy(4)(3));

// callback function
setTimeout(function (){
  console.log('Callback');
}, 1000);

/* array callback method */
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// foreach
numbers.forEach(num => console.log(num * 2));

// map
const doubles = numbers.map(num => {
  return num * 2;
})
console.log(doubles);

// find
const movies = ['Umbrella Academy', 'The Boys', 'Lucifer', 'The Flash'];

const movie = movies.find(movie => movie.includes('Academy'));
console.log(movie);

// filter
const nums = [23, 24, 56, 44, 55, 76, 79, 97];

const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

// every
const words = ['dig', 'log', 'ken', 'rob'];

const all3Lets = words.every(word => word.length === 3);
console.log(all3Lets);

// some
const someStartWithD = words.some(word => word.indexOf('d') === 0);
console.log(someStartWithD);

// sort
const prices = [400.5, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.slice().sort(); // convert to string and stopPropagation();
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

console.log(badSort, ascSort, descSort);

// reduce
const product = prices.reduce((total, currentVal) => total * currentVal);
const product2 = prices.reduce((total, currentVal) => total * currentVal, 2);
console.log(product, product2);

const maxPrice = prices.reduce((max, currentVal) => Math.max(max, currentVal));
const minPrice = prices.reduce((min, currentVal) => Math.min(min, currentVal));
console.log(maxPrice, minPrice);

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const tally = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(tally);