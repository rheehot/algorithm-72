const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./1181.txt").toString().trim().split("\n");
input.shift();
const arr = input.sort((a, b) => {
  if (a.length - b.length === 0) {
    return a.localeCompare(b);
  } else return a.length - b.length;
});
const set = new Set(arr);
console.log(Array.from(set).join("\n"));
