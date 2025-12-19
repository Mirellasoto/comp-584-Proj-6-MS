const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

// the grid is the input split by line breaks
const grid = input.split("\n");

// the amount of columns is the length of each line
const columns = grid[0].length;

// our starting spot
let line= 0;
let column = 0;
let trees = 0;

//for each row
while (line < grid.length) {

  //if it is a tree
  if (grid[line][column % columns] === "#") {

    // add to tree counter
    trees++;
  }

  // move to next row
  line++;

  // move three columns
  column += 3;
}

// now we have the amount of trees we ran into
console.log(trees);
