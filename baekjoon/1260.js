const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./1260.txt").toString().trim().split("\n");

const start = Number(input[0].split(" ")[2]);
const length = Number(input[0].split(" ")[0]);
const line = Number(input[0].split(" ")[1]);
const nodeArr = [];
input.shift();

input.forEach((el) => {
  const node = el.split(" ");
  if (nodeArr[node[0]]) {
    nodeArr[node[0]] = [...nodeArr[node[0]], Number(node[1])];
    nodeArr[node[0]].sort();
  } else nodeArr[node[0]] = [Number(node[1])];
  if (nodeArr[node[1]]) {
    nodeArr[node[1]] = [...nodeArr[node[1]], Number(node[0])];
    nodeArr[node[1]].sort();
  } else nodeArr[node[1]] = [Number(node[0])];
});

const bfs = [start];
const dfs = [start];

new Array(length).fill("").forEach((_, i) => {
  if (nodeArr[bfs[i]])
    nodeArr[bfs[i]].forEach((el) => {
      if (bfs.includes(el)) return;
      bfs.push(el);
    });
});

console.log(nodeArr);
new Array(length).fill("").forEach((_) => {
  // 현재 점
  const current = dfs[dfs.length - 1];
  console.log(current);
  // 현재 점과 연결된 점
  for (let i = 0; i < nodeArr[current].length; i++) {
    const el = nodeArr[current][i];
    console.log(el);
    // 이미 포함하고 있으면
    if (dfs.includes(el)) continue;
    // 가장 작은 점 추가
    else {
      dfs.push(el);
      break;
    }
  }
});
// 현재 점과 연결된 점 중에서 가지 않은 점 찾기
const dfsFunc = (current) => {
  let next;
  for (let i = 0; i < nodeArr[current].length; i++) {
    // 이미 갔으면 undefined
    if (dfs.includes(nodeArr[current][i])) continue;
    // 가지 않은 점
    next = nodeArr[current][i];
  }

  // 가지 않은 점을 찾았으면 리턴
  if (next) {
    return next;
  } else {
    nodeArr[current].forEach((el) => {
      dfsFunc(el);
    });
  }
};
console.log(line + 1, dfs.length);

while (dfs.length !== length) {
  // 마지막 점(현재 점)
  let current = dfs[dfs.length - 1];
  //   const result = dfsFunc(current);
  //   if (result ) dfs.push(result);
  dfs.push("A");
}

console.log(...dfs);
console.log(...bfs);
