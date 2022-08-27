const fs = require("fs");
const { join } = require("path/posix");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let sugar = Number(input[0]);
let basket5 = Math.trunc(sugar / 5);
let basket3 = 0;
let remaining = sugar - basket5 * 5;

if (remaining % 3 === 0) {
  basket3 = remaining / 3;
  remaining = 0;
} else {
  new Array(Math.trunc(sugar / 3)).fill("").forEach(() => {
    if (remaining === 0) return;
    if (basket5 > 0) {
      basket5 -= 1;
      remaining += 5;
    }
    if (remaining % 3 === 0) {
      basket3 = remaining / 3;
    }
    remaining = sugar - basket5 * 5 - basket3 * 3;
  });
}

if (remaining !== 0) console.log(-1);
else console.log(basket5 + basket3);
