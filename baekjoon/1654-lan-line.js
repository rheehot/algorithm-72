const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("./1654-lan-line.txt")
  .toString()
  .trim()
  .split("\n");
const lanLineCount = Number(input[0].split(" ")[0]);
const need = Number(input[0].split(" ")[1]);
let totalLength = 0;
new Array(lanLineCount).fill("").forEach((_, i) => {
  totalLength += Number(input[i + 1]);
});
let max = Math.trunc(totalLength / need);
let min = 1;
function getLength(min, max) {
  let length = Math.round((max + min) / 2);
  for (let temp = max; temp > length; temp--) {
    let sum = 0;
    new Array(lanLineCount).fill("").forEach((_, i) => {
      sum += Math.trunc(input[i + 1] / temp);
    });
    console.log(temp, sum, need);
    if (sum === need) {
      console.log(length);
      break;
    } else if (sum > need) {
      getLength(length, max);
    } else if (sum < need) {
      getLength(min, length);
    }
  }
}
getLength(min, max);

// for (let length = Math.trunc(totalLength / need); length > 0; length--) {
//   let sum = 0;
//   new Array(lanLineCount).fill("").forEach((_, i) => {
//     sum += Math.trunc(input[i + 1] / length);
//   });
//   if (sum === need) {
//     console.log(length);
//     break;
//   }
// }
