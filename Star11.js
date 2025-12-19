const fs = require("fs");

const groups = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n\n");

// start at 0
let total = 0;

// for each group of people
for (const group of groups) {

  // using set will create a list of all different chars
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
  const answers = new Set(group.replace(/\n/g, ""));

  // answers now have all unique letters, so the size is what we need
  total += answers.size;
}

console.log(total);
