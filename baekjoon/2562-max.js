const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const max = Math.max(...input);
console.log(max);
input.forEach((el, i) => {
  if (el == max) {
    console.log(i + 1);
    return;
  }
});
