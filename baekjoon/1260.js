const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./1260.txt").toString().trim().split("\n");
const input = `
5 5 1
1 2
2 3
3 1
1 4
3 5
`
  .toString()
  .trim()
  .split("\n");

const vertexLength = Number(input[0].split(" ")[0]);
const degeLength = Number(input[0].split(" ")[1]);
const start = Number(input[0].split(" ")[2]);
const nodeArr = [];
input.shift();
input.forEach((el) => {
  const left = Number(el.split(" ")[0]);
  const right = Number(el.split(" ")[1]);
  if (!nodeArr[left]) nodeArr[left] = [right];
  else nodeArr[left] = [...nodeArr[left], right];
  if (!nodeArr[right]) nodeArr[right] = [left];
  else nodeArr[right] = [...nodeArr[right], left];
});
nodeArr.map((el) => el.sort());

// bfs
const bfs = () => {
  const check = [];
  const result = [start];
  const queue = [start];
  while (queue.length) {
    const current = queue.shift();
    // 이미 확인했으면
    if (check[current]) return;
    check[current] = true;
    nodeArr[current].forEach((vertex) => {
      if (result.includes(vertex)) return;
      result.push(vertex);
      queue.push(vertex);
    });
  }
  return result;
};

// dfs
const check = [];
const result = [start];
const dfs = () => {
  current = result[result.length - 1];
  if (check[current]) return;
  check[current] = true;
  for (let i = 0; i < nodeArr[current].length; i++) {
    const vertex = nodeArr[current][i];
    if (result.includes(vertex)) continue;
    result.push(vertex);
    break;
  }
  dfs();
};
dfs();
console.log(nodeArr);
console.log(...result);
// 1 2 3 5 4
console.log(...bfs(start));
// 1 2 3 4 5
