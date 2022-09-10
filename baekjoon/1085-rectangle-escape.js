const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("./1085-rectangle-escape.txt")
  .toString()
  .trim()
  .split(" ");
const arr = [];
arr.push(input[0]);
arr.push(input[1]);
arr.push(input[2] - input[0]);
arr.push(input[3] - input[1]);
console.log(Math.min(...arr));
