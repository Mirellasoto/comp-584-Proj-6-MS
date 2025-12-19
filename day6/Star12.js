const fs = require("fs");

const groups = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n\n");

let total = 0;

for (const group of groups) {

  const people = group.split("\n");

  let shared = new Set(people[0]);

  /*now that we have the set of the first person's answers, 
  we will take another's answer, and filter out any that don't match, 
  repeating for eveyone in the group */
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  for (const person of people.slice(1)) {
    shared = new Set([...shared].filter(ch => person.includes(ch)));
  }

  total += shared.size;
}

console.log(total);
