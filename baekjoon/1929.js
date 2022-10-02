const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));
// const input = fs
//   .readFileSync("./1929.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((el) => Number(el));
const result = [];
new Array(input[1] - input[0] + 1).fill(input[0]).forEach((el, i) => {
  const num = el + i;
  let valid = true;
  for (let j = 2; j * j <= num; j++) {
    if (num % j === 0) {
      valid = false;
      break;
    }
  }
  if (valid) result.push(num);
});
result.forEach((el) => {
  console.log(el);
});
