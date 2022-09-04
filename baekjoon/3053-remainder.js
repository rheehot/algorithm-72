const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const remainder = input.map((el) => Number(el) % 42);
const set = new Set(remainder);
console.log(set.size);
