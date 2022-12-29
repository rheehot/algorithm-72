const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./2741.txt").toString().trim();
let result = "";
for (let i = 0; i < Number(input); i++) {
  result += i + 1 + "\n";
}
console.log(result);
