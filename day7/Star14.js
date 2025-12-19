const fs = require("fs");

const rules = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map(line => {
    const [bag, contains] = line.split(" bags contain ");
    const inner = contains === "no other bags." ? [] :
      contains.split(", ").map(s => {
        const m = s.match(/^(\d+) (.+?) bags?\.?$/);
        return { count: Number(m[1]), color: m[2] };
      });
    return [bag, inner];
  });

const containsMap = new Map(rules);

function countBags(bag) {
  let total = 0;
  for (const item of containsMap.get(bag)) {

    // call the method for itself to add the bags inside, in addition to the bag itself
    total += item.count + item.count * countBags(item.color);
  }
  return total;
}

console.log(countBags("shiny gold"));
