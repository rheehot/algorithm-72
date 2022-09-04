const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
input.shift();
input.forEach((el) => {
  const item = el.split(" ");
  const person = item.shift();
  const average = item.reduce((acc, cur) => Number(acc) + Number(cur)) / person;
  let count = 0;
  item.forEach((el) => {
    if (el > average) count++;
  });
  const percent = (count / person) * 100;
  console.log(percent.toFixed(3) + "%");
});
