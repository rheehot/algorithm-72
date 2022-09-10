const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = fs
  .readFileSync("./10952-a+b-5.txt")
  .toString()
  .trim()
  .split("\n");
new Array(Number(input.length - 1)).fill("").forEach((_, i) => {
  const arr = input[i].split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
});
