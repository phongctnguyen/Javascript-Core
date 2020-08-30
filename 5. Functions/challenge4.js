const valuesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suitArr = ['clubs', 'spades', 'hearts', 'diamonds'];

function getCard() {
  const randomValue = Math.floor(Math.random() * valuesArr.length);
  const randomSuit = Math.floor(Math.random() * suitArr.length);

  return {
    value: valuesArr[randomValue],
    suit: suitArr[randomSuit]
  }
}

console.log(getCard());