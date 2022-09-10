const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));
// const input = fs
//   .readFileSync("./2609.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((el) => Number(el));
const min = input[0] < input[1] ? input[0] : input[1];
const max = input[0] > input[1] ? input[0] : input[1];
let result;
for (let i = min; i > 0; i--) {
  if (max % i === 0 && min % i === 0) {
    result = i;
    break;
  }
}
console.log(result);
console.log((((min / result) * max) / result) * result);
