const fs = require("fs");
const { join } = require("path/posix");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const n = Number(input[0]);
const aList = input[1].split(" ");
const bList = input[2].split(" ");
const result = [];
new Array(n).fill("").forEach((_, i) => {
  let aSum = 0;
  let bSum = 0;
  new Array(n).fill("").forEach((_, j) => {
    if (i <= j) {
      aSum += Number(aList[j]);
      bSum += Number(bList[j]);
      if (aSum === bSum) result.push({ i, j });
    }
  });
});
console.log(result.length);
