const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./2440.txt").toString().trim();

let result = "";
for (let i = input; i > 0; i--) {
  if (i === 1) {
    result += "*".repeat(i);
  } else result += "*".repeat(i) + "\n";
}
console.log(result);
