const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => Number(el));
const input = fs
  .readFileSync("./2775.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));
input.shift();
const testCase = [];
input.forEach((_, i) => {
  if (i % 2) {
    testCase.push([input[i - 1], input[i]]);
  }
});
const getSum = (b, result) => {
  let sum = 0;
  // console.log(b);
  new Array(Number(b)).fill(1).forEach((room, roomIdx) => {
    sum += roomIdx + 1;
    // console.log(sum);
  });
  return sum + result;
};
testCase.forEach((el) => {
  let result = 0;
  new Array(el[0]).fill(1).forEach((floor, floorIdx) => {
    let currentFloor = 0;
    if ((currentFloor = el[0])) {
      // console.log(result);
      return;
    }
    result = getSum(el[1], result);
    currentFloor++;
  });
});

// 4 16 39 43
// 2 7 15 29
// 1 3 5 10
// 1 2 3 4
