const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./15829.txt").toString().trim().split("\n");
const str = input[1].split("");
const result = new Array(Number(input[0])).fill("").reduce((acc, _, i) => {
  const temp = 31 ** i % 1234567891;
  return (acc + (str[i].charCodeAt() - 96) * temp) % 1234567891;
}, 0);
console.log(result % 1234567891);
