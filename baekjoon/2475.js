const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("./2475.txt").toString().trim().split(" ");
const squareSum = input.map((el) => el ** 2).reduce((a, c) => a + c);
console.log(squareSum % 10);
