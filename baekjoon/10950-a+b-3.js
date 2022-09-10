const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = fs.readFileSync("./10950-a+b-3.txt").toString().split("\n");
new Array(Number(input[0])).fill("").forEach((_, i) => {
  const arr = input[i + 1].split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
});
