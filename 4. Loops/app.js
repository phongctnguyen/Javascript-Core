// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// arrays loop
const scores = [2, 3, 5, 6, 7, 8];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// nested loop
for (let i = 1; i <= 10; i++) {
  console.log('Outer loops: ', i);

  for (let j = 10; j >= 0; j-=2) {
    console.log("Inner loops: ", j);
  }
}

// while loop
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

const target = Math.floor(Math.random() * 10);
let guess =  Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`)
  guess =  Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log("You wins");

// break
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

// for .. of
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (sub of subreddits) {
  console.log(sub);
}

for (char of 'phong') {
  console.log(char);
}

let movieReviews = {
  A: 7,
  B: 8,
  C: 9,
  D: 10
}

for (let key of Object.keys(movieReviews)) {
  console.log(key);
}

for (let value of Object.values(movieReviews)) {
  console.log(value);
}

// for .. in
for (key in movieReviews) {
  console.log(movieReviews[key]);
}