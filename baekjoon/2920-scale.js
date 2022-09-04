const fs = require("fs");
// const input = fs.readFileSync("./2920-scale.txt").toString().split(" ");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let ascending = true;
let descending = true;

input.forEach((el, i) => {
  if (input[i + 1]) {
    if (Number(el) + 1 != input[i + 1]) {
      ascending = false;
    }
  }
  if (input[i + 1]) {
    if (Number(el) - 1 != input[i + 1]) {
      descending = false;
      return;
    }
  }
});
if (!ascending && !descending) console.log("mixed");
if (ascending) console.log("ascending");
if (descending) console.log("descending");
