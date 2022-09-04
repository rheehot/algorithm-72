const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("./2742-n.txt").toString();
let current = Number(input);
let result = Number(input);
while (current !== 1) {
  current = current - 1;
  result += "\n" + Number(current);
}

console.log(result);
