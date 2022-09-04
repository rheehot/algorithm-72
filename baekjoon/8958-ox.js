const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = fs.readFileSync("./8958-ox.txt").toString().split("\n");
input.shift();
if (input)
  input.forEach((el) => {
    if (!el) return;
    const arr = el.split("X");
    const score = [];
    arr.forEach((el) => {
      if (el)
        el.split("").forEach((_, i) => {
          score.push(i + 1);
        });
    });
    if (score.length) console.log(score.reduce((a, c) => a + c));
  });
