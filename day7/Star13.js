const fs = require("fs");

const rules = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map(line => {

    // seperating bag color from the contents
    const [bag, contains] = line.split(" bags contain ");

    // split the contents
    const inner = contains === "no other bags." ? [] :
      contains.split(", ").map(s => s.replace(/ bags?\.?/, ""));
    return [bag, inner];
  });

// using a map to assign a key to each
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const containsMap = new Map(rules);

// look to see if the bag has golden bags
function containGold(bag) {
  const inner = containsMap.get(bag);

  // in the situation there is nothing
  if (!inner) return false;

  // for each bag inside
  for (const item of inner) {

    // get just the color
    const color = item.replace(/^\d+ /, ""); 

    // check if it is gold
    if (color === "shiny gold" || containGold(color)) {
      return true;
    }
  }
  return false;
}

let result = 0;

// go through each bag type to see if it has golden bags
for (const bag of containsMap.keys()) {
  if (containGold(bag)) result++;
}

console.log(result);
