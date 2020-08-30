// const pangram = 'The quick brown fox jumps over the lazy dog';

function isPangram(pangram) {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (!pangram.toLowerCase().includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));
