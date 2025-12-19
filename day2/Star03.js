const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

// for each line :
function isValid(line) {

  /* we know that each line is seperated into policy and 
  pasword by a ":" so we will use that to categorize them*/
  const [policy, password] = line.split(': ');

  // same as splitting the policy into range and letter
  const [range, letter] = policy.split(' ');

  // and same into the min and max of the range
  const [min, max] = range.split('-').map(Number);

  //trimming password to be safe
  const passwordTrimmed = password.trim()

  // we use count to keep track of how often the letter apears
  let count = 0;

  /* for each char of password, we will see 
  if it is the one we are looking for */
  for (const char of passwordTrimmed) {

    // if it is, we will add to count
    if (char === letter) count++;
  }

  /* we will check if it is both, greater than the min 
  and less than the max, if it is, we will return with it is valid */
  return count >= min && count <= max;
}

// leave only those that are valid in the list
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const result = input.filter(isValid).length;

// and print how long it is
console.log(result);
