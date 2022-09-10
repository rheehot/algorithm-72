const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./10869-operation.txt").toString().split(" ");
console.log(Number(input[0]) + Number(input[1]));
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(Math.trunc(input[0] / input[1]));
console.log(input[0] % input[1]);
