// create array
let shoppingList = ['cereal', 'cheese', 'ice'];
console.log(shoppingList);

// array length
console.log(shoppingList.length)

// push & pop
shoppingList.pop();
shoppingList.push('lemon');
shoppingList.push('apple');
console.log(shoppingList);

// shift & unshift
shoppingList.shift();
shoppingList.unshift('banana');
console.log(shoppingList);

// concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
console.log(array1.concat(array2)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(array1.concat(array2, array3)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

// includes & indexOf
console.log(shoppingList.includes('cheese'));
console.log(shoppingList.includes('cheese', 3)); // false
console.log(shoppingList.includes('ice'));

console.log(shoppingList.indexOf('apple'));
console.log(shoppingList.indexOf('ice'));

// reverse & join
console.log(array1.reverse());

const newArr = ["Nguyen", "Cao", "Truong", "Phong"];
console.log(newArr.join(' '));

// slice
let animals = ['shark', 'salmon', 'lizard', 'tortoise'];
console.log(animals.slice(0, 3));
console.log(animals.slice(0, animals.length));
console.log(animals.slice(0));
console.log(animals.slice(-2));
console.log(animals.slice(-2, -1));

// splice
console.log(animals.splice(1, 1));
console.log(animals.splice(1, 0, "dragon"));
console.log(animals);

// sort
console.log(animals.sort());
console.log(animals);

// nested array
const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram']
];

console.log(animalPairs[1][1]);