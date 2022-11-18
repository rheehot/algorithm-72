const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./1676.txt").toString().trim();
let result = ~~(input / 5);
let count = result;
while (result >= 5) {
  result = ~~(result / 5);
  count += result;
}
console.log(count);
