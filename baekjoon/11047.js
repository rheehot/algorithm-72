const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./11047.txt").toString().trim().split("\n");
let price = Number(input[0].split(" ")[1]);
let count = 0;
for (let i = input.length - 1; i > 0; i--) {
  if (price === 0) break;
  const coin = Number(input[i]);
  if (coin > price) {
    continue;
  }
  count += Math.floor(price / coin);
  price = price % coin;
}
console.log(count);
