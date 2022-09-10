const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("./1259-palindrome.txt")
  .toString()
  .trim()
  .split("\n");
input.pop();
input.forEach((el) => {
  const arr = el.split("");
  let result = true;
  new Array(Math.trunc(arr.length / 2)).fill("").forEach((el, i) => {
    if (arr[i] != arr[arr.length - i - 1]) {
      result = false;
    }
  });
  console.log(result ? "yes" : "no");
});
