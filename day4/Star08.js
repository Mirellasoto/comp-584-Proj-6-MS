const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

const passports = input.split("\n\n");

let result = 0;

// now we try to see if the fields match to the valid types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
for (const passport of passports) {
  const fields = passport.replace(/\n/g, " ");
  const valid = fields.match(/byr:(19[2-9]\d|200[0-2])\b/) &&
    fields.match(/iyr:(201\d|2020)\b/) &&
    fields.match(/eyr:(202\d|2030)\b/) &&
    fields.match(/hgt:(1[5-8]\d|19[0-3])cm\b|hgt:(59|6\d|7[0-6])in\b/) &&
    fields.match(/hcl:#[0-9a-f]{6}\b/) &&
    fields.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)\b/) &&
    fields.match(/pid:\d{9}\b/
  );

  if (valid) {
    result++;
  }
}

console.log(result);