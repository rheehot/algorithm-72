const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const multiple = input[0] * input[1] * input[2];
new Array(10).fill("").forEach((_, i) => {
  const result = multiple
    .toString()
    .split("")
    .filter((el) => el === String(i));
  console.log(result.length);
});
