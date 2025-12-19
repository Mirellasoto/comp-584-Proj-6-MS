const fs = require("fs");

const passes = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")

const seatIds = [];

for (const pass of passes) {
  let rowLow = 0, rowHigh = 127;
  let colLow = 0, colHigh = 7;

  for (const letter of pass) {
    if (letter === "F") rowHigh = Math.floor((rowLow + rowHigh) / 2);
    if (letter === "B") rowLow  = Math.ceil((rowLow + rowHigh) / 2);
    if (letter === "L") colHigh = Math.floor((colLow + colHigh) / 2);
    if (letter === "R") colLow  = Math.ceil((colLow + colHigh) / 2);
  }

  // we will add every seat id found within the input, to seat ids
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  seatIds.push(rowLow * 8 + colLow);
}

// sort the values so we can easily tell what gap is missing
seatIds.sort((a, b) => a - b);

// for every seat, we will compare it's number to the next value of the seat before, and find the gap that way
for (let i = 1; i < seatIds.length; i++) {
  if (seatIds[i] !== seatIds[i - 1] + 1) {
    console.log(seatIds[i - 1] + 1);
    break;
  }
}