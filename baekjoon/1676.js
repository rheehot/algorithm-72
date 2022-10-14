const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./1676.txt").toString().trim();
let factorial = 1;
new Array(Number(input)).fill(1).forEach((el, i) => {
  factorial *= el + i;
});
let result = 0;
for (let i = String(factorial).length - 1; i >= 1; i--) {
  if (String(factorial)[i] === "0") {
    result++;
  } else break;
}
console.log(result);
