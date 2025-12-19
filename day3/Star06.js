const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

const map = input.split("\n");
const columns = map[0].length;

function countTrees(right, down) {
let line= 0;
let column = 0;
let trees = 0;

while (line < map.length) {
  if (map[line][column % columns] === "#") {
    trees++;
  }

  // the downs and rights will not all be the same
  line+= down;
  column += right;
}
return trees;
}

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
  
  // product is one beacuse we will be multiplying 
let product = 1;

// for each slope we get the number of trees
for (const [right, down] of slopes) {

  // and multipling each count
  product *= countTrees(right, down);
}

console.log(product);
