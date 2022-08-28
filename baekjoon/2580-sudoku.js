const fs = require("fs");
const { join } = require("path/posix");
let row = fs.readFileSync("/dev/stdin").toString().split("\n");

rowArr = [];
row.forEach((el) => {
  rowArr.push(el.split(" "));
});

rowArr.forEach((rowEl, i) => {
  const numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  rowEl.forEach((el, elIndex) => {
    if (numberList.includes(el)) numberList.splice(numberList.indexOf(el), 1);
  });

  // 가로줄에 빈칸이 하나인 경우
  if (numberList.length === 1) {
    rowArr[i][rowEl.indexOf("0")] = numberList[0];
  }

  rowEl.forEach((el, elIndex) => {
    if (el === "0") {
      const colArr = rowArr.map((rowEl) => rowEl[elIndex]);
      numberList2 = [...numberList];
      colArr.forEach((el) => {
        if (numberList2.includes(el))
          numberList2.splice(numberList2.indexOf(el), 1);
      });
      // 들어갈 수 있는 값이 하나만 남은 경우
      if (numberList2.length === 1) {
        rowArr[i][elIndex] = numberList2[0];
      }
    }
  });
});
rowArr.forEach((rowEl, i) => {
  const numberList2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  numberList2.forEach((num, numIndex) => {
    if (rowEl.includes(num)) numberList2.splice(numIndex, 1);
  });
  rowEl.forEach((el, elIndex) => {
    if (el !== "0") return;
    // 후보가 여러 개 남은 경우, 3*3 에서 도출
    const rect = [];
    const numberList3 = [...numberList2];
    // 빈칸의 위치
    const row = i;
    const col = elIndex;
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;

    rect.push(rowArr[rowStart][colStart]);
    rect.push(rowArr[rowStart][colStart + 1]);
    rect.push(rowArr[rowStart][colStart + 2]);
    rect.push(rowArr[rowStart + 1][colStart]);
    rect.push(rowArr[rowStart + 1][colStart + 1]);
    rect.push(rowArr[rowStart + 1][colStart + 2]);
    rect.push(rowArr[rowStart + 2][colStart]);
    rect.push(rowArr[rowStart + 2][colStart + 1]);
    rect.push(rowArr[rowStart + 2][colStart + 2]);
    numberList3.forEach((candidate) => {
      if (rect.includes(candidate))
        numberList3.splice(numberList3.indexOf(candidate), 1);
    });
    rowArr[i][elIndex] = numberList3[0];
  });
});

const result = rowArr.map((el) => el.join(" "));
console.log(result.join("\n"));
