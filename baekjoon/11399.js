const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./11399.txt").toString().trim().split("\n");
const arr = input[1]
  .split(" ")
  .map((el) => Number(el))
  .sort();
let result = 0;
arr.forEach((el1, i) => {
  arr.forEach((el, j) => {
    if (i >= j) {
      result += el;
    }
  });
});
console.log(result);
