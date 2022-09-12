const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./9012.txt").toString().trim().split("\n");
new Array(Number(input[0])).fill("").forEach((_, i) => {
  let leftCount = 0;
  let rightCount = 0;
  let result;
  input[i + 1].split("").forEach((el) => {
    if (result === "NO") return;
    if (el === "(") leftCount++;
    else if (el === ")") rightCount++;
    if (rightCount > leftCount) {
      result = "NO";
    }
  });
  if (result === "NO") console.log("NO");
  else if (leftCount !== rightCount) console.log("NO");
  else console.log("YES");
});
