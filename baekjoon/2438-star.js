const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("./2438-star.txt").toString();
new Array(Number(input)).fill(1).forEach((el, i) => {
  let str = "";
  new Array(el + i).fill("").forEach(() => (str += "*"));
  console.log(str);
});
