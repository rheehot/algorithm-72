const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input2 = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs.readFileSync("./1463.txt").toString().trim();
let input2 = fs.readFileSync("./1463.txt").toString().trim();
let result1 = 0;
while (input !== 1) {
  result1++;
  if (input % 3 === 0) {
    input /= 3;
  } else if ((input - 1) % 3 === 0) {
    input -= 1;
  } else if (input % 2 === 0) {
    input /= 2;
  } else {
    input -= 1;
  }
}
let result2 = 0;
while (input2 !== 1) {
  result2++;
  if (input2 % 2 === 0) {
    input2 /= 2;
  } else if (input2 % 3 === 0) {
    input2 /= 3;
  } else if ((input2 - 1) % 3 === 0) {
    input2 -= 1;
  } else {
    input2 -= 1;
  }
}
console.log(result1 > result2 ? result2 : result1);
