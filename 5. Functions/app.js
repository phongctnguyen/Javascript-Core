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
}, 5000);

/* array callback method */
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// foreach
numbers.forEach(num => console.log(num * 2));

// map
const doubles = numbers.map(num => {
  return num * 2;
})
console.log(doubles);

