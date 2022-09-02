const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[1]
  .split(" ");
console.log(Math.min(...input) + " " + Math.max(...input));
