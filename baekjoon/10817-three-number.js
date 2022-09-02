const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const max = Math.max(...input);
let index = 0;
input.filter((el, i) => {
  if (el == max) {
    index = i;
    return;
  }
});
input.splice(index, 1);
console.log(Math.max(...input));
