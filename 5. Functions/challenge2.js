function average(myArray) {
  let total = 0;
  for (let i of myArray) {
    total += i;
  }
  return total / myArray.length;
}

console.log(average([2, 3, 4]));
console.log(average([5, 7, 12]));
console.log(average([7, 23, 34]));