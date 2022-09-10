const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./2739-multiplication.txt").toString().trim();
new Array(9).fill(1).forEach((el, i) => {
  console.log(`${input} * ${i + 1} = ${el * (i + 1) * input}`);
});
