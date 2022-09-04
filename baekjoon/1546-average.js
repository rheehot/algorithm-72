const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const score = input[1].split(" ");
const max = Math.max(...score);
const newScore = score.map((el) => (el / max) * 100);
const newScoreSum = newScore.reduce((acc, cur) => acc + cur);
console.log(newScoreSum / input[0]);
