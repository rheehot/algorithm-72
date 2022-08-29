const fs = require("fs");
const { join } = require("path/posix");
let row = fs.readFileSync("./2580-sudoku.txt").toString().split("\n");

// 들어갈 수 있는 숫자 배열
const candidate = new Array(9).fill(1).map((el, i) => String(el + i));

// 1. 가로행 기준 배열
rowArr = [];
row.forEach((el) => {
  rowArr.push(el.split(" "));
});

// 가로행에 들어가지 않은 숫자를 찾는다.
rowArr.forEach((rowEl, rowIndex) => {
  const rowCandidate = [...candidate];
  rowEl.forEach((el, i) => {
    if (rowCandidate.includes(el)) {
      rowCandidate.splice(rowCandidate.indexOf(el), 1);
    }
  });
  // 후보 숫자가 하나만 남은 경우, 남은 숫자를 빈자리에 대입한다.
  if (rowCandidate.length === 1) {
    rowEl[rowEl.indexOf("0")] = rowCandidate[0];
  }
});

// 2. 세로행 기준 배열
colArr = new Array(9).fill([]);
rowArr.forEach((rowEl) => {
  rowEl.forEach((_, elIndex) => {
    colArr[elIndex] = [...colArr[elIndex], ...rowEl[elIndex]];
  });
});

// 세로행에 들어가지 않은 숫자를 찾는다.
colArr.forEach((colEl, colIndex) => {
  const colCandidate = [...candidate];
  colEl.forEach((el, i) => {
    if (colCandidate.includes(el)) {
      colCandidate.splice(colCandidate.indexOf(el), 1);
    }
  });
  if (colCandidate.length === 1) {
    rowArr[colEl.indexOf("0")][colIndex] = colCandidate[0];
  }
});

// 3. 3*3 기준 배열
rowArr.forEach((rowEl, rowIndex) => {
  rowEl.forEach((el, elIndex) => {
    if (el === "0") {
      const squareArr = [];
      new Array(3).fill("").forEach((_, y) => {
        new Array(3).fill("").forEach((_, x) => {
          squareArr.push(
            rowArr[Math.trunc(rowIndex / 3) * 3 + y][
              Math.trunc(elIndex / 3) * 3 + x
            ]
          );
        });
      });
      squareCandidate = [...candidate];
      squareArr.forEach((el, i) => {
        if (squareCandidate.includes(el)) {
          squareCandidate.splice(squareCandidate.indexOf(el), 1);
        }
      });
      rowArr[rowIndex][elIndex] = squareCandidate[0];
    }
  });
});
console.log(rowArr.map((el) => el.join(" ")).join("\n"));
