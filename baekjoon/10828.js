const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./10828.txt").toString().trim().split("\n");
let arr = [];
new Array(Number(input[0])).fill("").forEach((_, i) => {
  if (input[i + 1].includes("push")) {
    // arr = [...arr, input[i + 1].split(" ")[1]];
    arr.push(input[i + 1].split(" ")[1]);
  } else if (input[i + 1].includes("pop")) {
    if (arr.length) {
      console.log(arr.pop());
      // arr = arr.filter((el, i) => {
      //   if (i !== arr.length - 1) return el;
      // });
    } else console.log(-1);
  } else if (input[i + 1].includes("size")) {
    console.log(arr.length);
  } else if (input[i + 1].includes("empty")) {
    console.log(arr.length ? 0 : 1);
  } else if (input[i + 1].includes("top")) {
    console.log(arr.length ? arr[arr.length - 1] : -1);
  }
});
