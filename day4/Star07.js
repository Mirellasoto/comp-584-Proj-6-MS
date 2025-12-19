const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

const passports = input.split("\n\n");

// the fields we will be looking for
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let result = 0;

// for each line
for (const passport of passports) {

  // if passport has an unnecessary line brake, remove it 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  const fields = passport.replace(/\n/g, " ");

  // if passport has all require fields, it is valid
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  const valid = required.every(field =>
    fields.includes(field + ":")
  );

  // if valid, add to result
  if (valid) {
    result++;
  }
}

// print result
console.log(result);
