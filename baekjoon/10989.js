const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => Number(el));
const input = fs
  .readFileSync("./10989.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));
new Array(input[0]).fill("").forEach((_, i) => {
  //   if (0) return;
  let min = Math.min(...input);
  input.splice(input.indexOf(min), 1);
  console.log(min);
});
