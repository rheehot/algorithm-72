const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("./2420.txt").toString().split(" ");
console.log(Math.abs(input[0] - input[1]));
