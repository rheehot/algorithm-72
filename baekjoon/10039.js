const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./10039.txt").toString().trim().split("\n");
let total = 0;
const result = input.forEach((el) => {
  if (el < 40) total += 40;
  else total += Number(el);
});
console.log(total / input.length);
