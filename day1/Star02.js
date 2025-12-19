const fs = require('fs');

const numbers = fs
  .readFileSync('input.txt', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

function findNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {

      // now we need a third number
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 2020) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }
}


const result = findNumbers(numbers);
const product = result.reduce((a, b) => a * b, 1);
console.log(product);
