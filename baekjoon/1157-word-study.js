const fs = require("fs");
// const str = fs.readFileSync("/dev/stdin").toString().toUpperCase();
const str = fs.readFileSync("./1157-word-study.txt").toString().toUpperCase();

const arr = [];
const count = {};
str.split("").forEach((el) => {
  if (arr.includes(el)) {
    count[el] = ++count[el];
    return;
  }
  arr.push(el);
  count[el] = 0;
});

const max = Math.max(...Object.values(count));
const result = [];
Object.entries(count).forEach((el) => {
  if (el[1] === max) result.push(el[0]);
});
console.log(result.length === 1 ? result[0] : "?");
