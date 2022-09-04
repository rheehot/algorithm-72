const fs = require("fs");
// const input = fs.readFileSync("./2908-const.txt").toString().split(" ");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
console.log(
  Number(input[0].split("").reverse().join("")) >
    Number(input[1].split("").reverse().join(""))
    ? Number(input[0].split("").reverse().join(""))
    : Number(input[1].split("").reverse().join(""))
);
