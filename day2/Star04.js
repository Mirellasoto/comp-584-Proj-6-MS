const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

function isValid(line) {
  const [policy, password] = line.split(': ');
  const [range, letter] = policy.split(' ');
  const [min, max] = range.split('-').map(Number);

  /* now we are using "min" as the first position we will check,
   minus one because normal people start counting at one */
  const firstMatch = password[min - 1] === letter;

  // and max in this case is the next position check
  const secondMatch = password[max - 1] === letter;

  // if one of the matches is vaild, the line is valid
  return firstMatch !== secondMatch;
}

const result = input.filter(isValid).length;

console.log(result);
