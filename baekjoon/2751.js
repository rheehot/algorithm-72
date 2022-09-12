const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el=>Number(el));
const input = fs
  .readFileSync("./2751.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));
//   const arr = [];
// new Array(input[0]).fill("").forEach((_, i) => {
//   console.log(input[i + 1]);

// });
input.shift();
input.sort((a, b) => a - b);
input.forEach((el) => console.log(el));
