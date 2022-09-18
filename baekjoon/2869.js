const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((el) => Number(el));
const input = fs
  .readFileSync("./2869.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));
const [a, b, v] = [input[0], input[1], input[2]];
let day = Math.ceil((v - a) / (a - b)) + 1;
console.log(day);
