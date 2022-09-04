const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const result = input.filter((el) => el !== "");
console.log(result.length);
