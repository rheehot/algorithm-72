const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// const input = fs.readFileSync("./1008-a-division-b.txt").toString().split(" ");
console.log(input[0] / input[1]);
