const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("./11720-sum.txt").toString().split("\n");
console.log(input[1].split("").reduce((a, c) => Number(a) + Number(c)));
