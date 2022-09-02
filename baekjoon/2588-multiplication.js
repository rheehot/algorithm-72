const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const operandList = input[1].split("").reverse();
operandList.forEach((el, i) => {
  console.log(input[0] * el);
});
console.log(input[0] * input[1]);
