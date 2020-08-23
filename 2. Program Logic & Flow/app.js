// Console log
console.log('Hello', 2 < 3);
console.log('3' == 3);
console.log('4' === 4);
console.log('Bye');

// Flow
if (1 === 1) {
  console.log("It's true");
}

let rating = 1;

if (rating === 3) {
  console.log('You are superstar');
} else if (rating === 2) {
  console.log('grr');
} else {
  console.log('bye');
}

// Nesting
let password = 'hellophong';

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid password');
  } else {
    console.log('Password cannot contain spaces');
  }
} else {
  console.log('Password must be longer!');
}

// switch
let day = 1;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  default:
    console.log('Sunday');
}

// ternary operator
// conditon ? expIfTrue : expIfFalse
let num = 7;
num === 7 ? console.log('lucky') : console.log('bad');