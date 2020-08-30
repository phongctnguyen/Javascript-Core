"use strict";

// First function
function hello() {
  console.log('Hello');
}

hello(); // Dice roll function

function rollDice() {
  var roll = Math.floor(Math.random() * 6) + 1;
  console.log("Rolled: ".concat(roll));
}

rollDice(); // Function with args

function greet(name) {
  console.log("Hello ".concat(name));
}

greet('Phong');

function multi(x, y) {
  console.log(x * y);
}

multi(3, 4);

function add(a, b) {
  return a + b;
}

var total = add(4, 5);
console.log(total);

function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
  } else {
    return false;
  }
}

console.log(isPurple('purple'));
console.log(isPurple('red')); // function scope

function lol() {
  var person = 'Tom';
  var age = 26;
  var color = 'teal';
} // block scope


if (true) {
  var a = 5;
  console.log(a);
} // lexical scope


function outer() {
  var name = 'phong';

  function inner() {
    console.log(name.toUpperCase());
  }

  inner();
}

outer(); // function expression

var sum = function sum(x, y) {
  return x + y;
};

console.log(sum(2, 5)); // higher order function

function rage() {
  console.log('RAGE');
} // function as arguments


function repeatNTimes(action, num) {
  for (var i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 5); // function return function

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

console.log(multiplyBy(4)(3)); // callback function

setTimeout(function () {
  console.log('Callback');
}, 1000);
/* array callback method */

var numbers = [20, 21, 22, 23, 24, 25, 26, 27]; // foreach

numbers.forEach(function (num) {
  return console.log(num * 2);
}); // map

var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles); // find

var movies = ['Umbrella Academy', 'The Boys', 'Lucifer', 'The Flash'];
var movie = movies.find(function (movie) {
  return movie.includes('Academy');
});
console.log(movie); // filter

var nums = [23, 24, 56, 44, 55, 76, 79, 97];
var evens = nums.filter(function (num) {
  return num % 2 === 0;
});
console.log(evens); // every

var words = ['dig', 'log', 'ken', 'rob'];
var all3Lets = words.every(function (word) {
  return word.length === 3;
});
console.log(all3Lets); // some

var someStartWithD = words.some(function (word) {
  return word.indexOf('d') === 0;
});
console.log(someStartWithD); // sort

var prices = [400.5, 3000, 99.99, 35.99, 12.00, 9500];
var badSort = prices.slice().sort(); // convert to string and stopPropagation();

var ascSort = prices.slice().sort(function (a, b) {
  return a - b;
});
var descSort = prices.slice().sort(function (a, b) {
  return b - a;
});
console.log(badSort, ascSort, descSort); // reduce

var product = prices.reduce(function (total, currentVal) {
  return total * currentVal;
});
var product2 = prices.reduce(function (total, currentVal) {
  return total * currentVal;
}, 2);
console.log(product, product2);
var maxPrice = prices.reduce(function (max, currentVal) {
  return Math.max(max, currentVal);
});
var minPrice = prices.reduce(function (min, currentVal) {
  return Math.min(min, currentVal);
});
console.log(maxPrice, minPrice);
var votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
var tally = votes.reduce(function (tally, val) {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(tally);