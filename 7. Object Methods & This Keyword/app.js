// shorthand properties
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // Using the new shorthand property syntax:
  return {
    max,
    min,
    sum,
    avg,
  };
};
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
console.log(reviews);

// computed properties
const role = 'host';
const person = 'Phong';

const team = {
  [role]: person,
};

console.log(team);

const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v,
});

const res = addProp(team, 'happy', ':)');
console.log(res);

// methods
const math = {
  numbers: [1, 2, 3, 4, 5],
  // add: function (x, y) {
  //   return x + y;
  // },
  // shorthand
  add(x, y) {
    return x + y;
  },
};

console.log(math.add(2, 3));

// this keyword
function sayHi() {
  console.log(this); // global object
}

sayHi();

const goodBye = () => {
  console.log(this);
};

goodBye();

// this in method
const persons = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName}`);
  },
};

persons.printBio();
persons.laugh();
