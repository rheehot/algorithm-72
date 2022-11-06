// 입력값
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 각 테스트 케이스의 배추밭 배열
const arr = [];
// 각 테스트 케이스의 x, y 길이
const testCaseInfo = [];
// 결과
const result = [];

// 테스트 케이스의 x, y, k가 담긴 index
let infoIndex = 1;

for (let caseIndex = 0; caseIndex < Number(input[0]); caseIndex++) {
  let x = Number(input[infoIndex].split(" ")[0]);
  let y = Number(input[infoIndex].split(" ")[1]);
  let k = Number(input[infoIndex].split(" ")[2]);
  testCaseInfo.push([x, y]);

  // 열이 x개, 행이 y개, 모든 값이 0인 배열을 만든다.
  const temp = new Array(y).fill([]);
  temp.forEach((_, i) => {
    temp[i] = new Array(x).fill(0);
  });

  // 테스트 케이스에 주어진 좌표의 값을 1로 변경한다.
  for (let i = infoIndex + 1; i < infoIndex + 1 + k; i++) {
    const x = Number(input[i].split(" ")[0]);
    const y = Number(input[i].split(" ")[1]);
    temp[y][x] = 1;
  }
  arr.push(temp);
  result.push(0);

  // 다음 테스트 케이스의 x, y, k가 담긴 index로 변경한다.
  infoIndex = infoIndex + 1 + k;
}

/**
 * 전달 받은 x, y 좌표의 값을 0으로 변경하고
 * 상하좌우의 값이 1일 경우 해당 좌표의 x, y를 인자로 다시 호출되는 함수
 * i: 테스트 케이스의 순서
 * x: 열 index
 * y: 행 index
 */
const dfs = (i, x, y) => {
  arr[i][y][x] = 0;
  if (x - 1 >= 0 && arr[i][y][x - 1] === 1) {
    dfs(i, x - 1, y);
  }
  if (x + 1 <= testCaseInfo[i][0] - 1 && arr[i][y][x + 1] === 1) {
    dfs(i, x + 1, y);
  }
  if (y - 1 >= 0 && arr[i][y - 1][x] === 1) {
    dfs(i, x, y - 1);
  }
  if (y + 1 <= testCaseInfo[i][1] - 1 && arr[i][y + 1][x] === 1) {
    dfs(i, x, y + 1);
  }
};

arr.forEach((_, i) => {
  arr[i].forEach((arrItem, y) => {
    arrItem.forEach((el, x) => {
      if (el == 1) {
        result[i]++;
        dfs(i, x, y);
      }
    });
  });
});

// 결과 출력
result.forEach((el) => console.log(el));
