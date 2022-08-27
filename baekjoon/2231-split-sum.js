const fs = require("fs");
const { join } = require("path/posix");
let input = fs.readFileSync("/dev/stdin").toString();
const length = String(input).split("").length;
const min = input - length * 9;
let result = 0;
new Array(input - min).fill("").forEach((_, i) => {
  let sum = 0;
  const numberList = String(min + i).split("");
  numberList.forEach((el) => (sum += Number(el)));
  if (sum + min + i == input && !result) {
    result = min + i;
    return;
  }
});
console.log(result);
