const fs = require("fs");
let number = fs.readFileSync("/dev/stdin").toString().padStart(2, "0");
const init = Number(number);
let count = 0;
const cycle = (number) => {
  if (Number(number) < 0 || Number(number) > 99) return;

  count = count + 1;
  const numberRight = number.slice(-1);
  const sum = Number(number[0]) + Number(number[1] || 0);
  const sumRight = sum.toString().slice(-1);
  if (init === Number(numberRight + sumRight)) {
    console.log(count);
    return;
  } else {
    cycle(numberRight + sumRight);
  }
};
cycle(number);
