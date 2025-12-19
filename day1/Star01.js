const fs = require('fs');

// I will use numbers to hold the input
const numbers = fs

  // reading input.txt as text 
  // https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
  .readFileSync('input.txt', 'utf8')

  // trimming off any extra spaces that may cause issues
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  .trim()

  // will use line breaks to seperate numbers 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  .split('\n')

  // the numbers found, into "numbers"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  .map(Number);


/* the function I will use to find the needed nubers
 I know it could probably be better, but this is just the most straight forword way */
function findNumbers(numbers) {

  // take one number
  for (let i = 0; i < numbers.length; i++) {

    // take another
    for (let j = i + 1; j < numbers.length; j++) {

      // add them, if they make 2020, great!
      if (numbers[i] + numbers[j] === 2020) {

        // return them
        return [numbers[i], numbers[j]];
      }
    }
  }
}

// we now have two numbers who sum is 2020
const result = findNumbers(numbers);

// now multiply them
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const product = result.reduce((a, b) => a * b, 1);

//output
console.log(product);