const fs = require("fs");

const passes = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n");

// until we find a higher one (we will) the max id is 0
let maxId = 0;

/* for each pass we know for sure it has a 
row/ column of at least 0, and max of 127 and 8 */
for (const pass of passes) {
  let rowLow = 0, rowHigh = 127;
  let colLow = 0, colHigh = 7;

  // we will use the letters to understand what half of the set we are working with
  for (const letter of pass) {
    if (letter === "F") rowHigh = Math.floor((rowLow + rowHigh) / 2);
    if (letter === "B") rowLow  = Math.ceil((rowLow + rowHigh) / 2);
    if (letter === "L") colHigh = Math.floor((colLow + colHigh) / 2);
    if (letter === "R") colLow  = Math.ceil((colLow + colHigh) / 2);
  }

  // each row has 8 seat so we must multiply it by 8
  const seatId = rowLow * 8 + colLow;

  // once we find a higher seat, max updates
  if (seatId > maxId) maxId = seatId;
}

console.log(maxId);
