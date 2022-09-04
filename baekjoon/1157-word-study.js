const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().toUpperCase();
let max = 0;
let maxAlphabet;
let duplicate = false;
str.split("").forEach((alphabet) => {
  const newStr = str.split(alphabet).join("");
  const lengthDiff = str.length - newStr.length;
  if (lengthDiff > max) {
    max = lengthDiff;
    maxAlphabet = alphabet;
  }
  if (lengthDiff === max && maxAlphabet !== alphabet) {
    duplicate = true;
    return;
  }
});
console.log(duplicate ? "?" : maxAlphabet);
