const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));
// const input = fs
//   .readFileSync("./11050.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((el) => Number(el));
let result = 1;
new Array(input[1]).fill("").forEach((_, i) => {
  result *= input[0] - i;
});
new Array(input[1]).fill("").forEach((_, i) => {
  result /= input[1] - i;
});
console.log(result);
