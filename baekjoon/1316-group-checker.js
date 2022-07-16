const fs = require("fs");
const { join } = require("path/posix");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const isGroupWordList = new Array(Number(input[0])).fill(true);
input.shift();
input.forEach((word, wordIndex) => {
  const letterList = [];
  word.split("").forEach((letter, i) => {
    if (i === 0) letterList.push(letter); // 첫번째 글자
    if (
      letterList.includes(letter) &&
      (letter === word[i - 1] || word[i - 1] === undefined)
    )
      return;
    if (letterList.includes(letter) && letter !== word[i - 1]) {
      isGroupWordList[wordIndex] = false;
      return;
    } else if (!letterList.includes(letter)) letterList.push(letter);
  });
});
let result = 0;
isGroupWordList.forEach((el) => {
  if (el) result++;
});
console.log(result);
