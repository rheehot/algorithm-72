const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./2750.txt").toString().trim().split("\n");
const set = new Set(input.map(Number));
[...set]
  .sort((a, b) => a - b)
  .forEach((el) => {
    console.log(el);
  });
