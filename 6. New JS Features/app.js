// default parameters
const greet = (person, greeting = 'Hi', punctuation = '!') =>
  console.log(`${greeting}, ${person} ${punctuation}`);

greet('Phong');
greet('Phong', 'Hello');
greet('Phong', 'Hello', '!!!');

// spread for function call
const nums = [24, 45, 67, 22, 45];
console.log(...nums);

function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'orange', 'blue', 'green'];
giveMeFour(...colors);

// spread in array literals
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num3 = [...num1, ...num2];
console.log(num3);

// spread in object literals
const arsenal = {
  Laca: 24,
  Auba: 25,
};

const manchester = {
  Harry: 26,
  Rash: 28,
};

const player1 = { ...arsenal, ...manchester };
const player2 = { ...arsenal, ...manchester, Mesut: 30 };
console.log(player1);
console.log(player2);

// rest parameters
function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4, 5);

function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

fullName('Phong', 'Nguyen', 'haha', 'lala');

// array destructuring
const raceResults = ['A', 'B', 'C', 'D', 'E'];
const [gold, silver, bronze] = raceResults;
const [first, , , fourth] = raceResults;
const [winner, ...others] = raceResults;
console.log(first, fourth); // A D
console.log(winner, others); // A [ 'B', 'C', 'D', 'E' ]

// object destructuring
const runner = {
  first: 'Laca',
  last: 'Auba',
  country: 'England',
  title: 'Hello Hello',
};

// const { country, title, time } = runner;
// const { country: test, title: test1, time } = runner;
const { country, title, ...other } = runner;
console.log(country, title, other);

// param destructuring
function print(person) {
  const { first, last, title } = person;
  console.log(`${first} ${last} ${title}`);
}
print(runner);

const response = ['HTTP/1.1', '200 OK', 'json'];
const [protocol, statusCode, contentType, xServer] = response;
console.log(protocol, statusCode, contentType, xServer); 