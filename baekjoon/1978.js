const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./1978.txt").toString().trim().split("\n");
let result = 0;
new Array(Number(input[0])).fill("").forEach((_, i) => {
  let valid = true;
  const number = input[1].split(" ")[i];
  if (number == 1) valid = false;
  new Array(Number(number)).fill("").forEach((el, i) => {
    if (i + 1 === 1 || i + 1 == number) return;
    else if (number % (i + 1) === 0) {
      valid = false;
    }
  });
  if (valid) result++;
});
console.log(result);
