const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
new Array(Number(input))
  .fill(new Array(Number(input)).fill("*").join(""))
  .forEach((el, i) => {
    console.log(el.slice(-(i + 1)).padStart(input, " "));
  });
