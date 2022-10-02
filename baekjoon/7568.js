const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./7568.txt").toString().trim().split("\n");
const result = new Array(Number(input[0])).fill(1);
input.shift();
input.forEach((el, i) => {
  const current = el.split(" ");
  const currentWeight = current[0];
  const currentHeight = current[1];
  input.forEach((el, j) => {
    if (i === j) return;
    const compare = el.split(" ");
    const compareWeight = Number(compare[0]);
    const compareHeight = Number(compare[1]);
    if (currentWeight < compareWeight && currentHeight < compareHeight) {
      result[i] = result[i] + 1;
    }
  });
});
console.log(result.join(" "));
