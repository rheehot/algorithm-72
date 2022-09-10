const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("./4153-right-triangle.txt")
  .toString()
  .trim()
  .split("\n");
input.pop();
input.forEach((el) => {
  const arr = el.split(" ").map((el) => Number(el));
  const max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  if (arr[0] ** 2 + arr[1] ** 2 === max ** 2) return console.log("right");
  else return console.log("wrong");
});
