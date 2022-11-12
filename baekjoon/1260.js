const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./1260.txt").toString().trim().split("\n");
const input = `5 4 1
2 3
3 4
4 5
5 2`
  .toString()
  .trim()
  .split("\n");

// 시작할 정점
const start = Number(input[0].split(" ")[2]);

// 각 정점과 연결된 정점을 담은 배열
const temp = [];
for (let i = 1; i < input.length; i++) {
  const left = Number(input[i].split(" ")[0]);
  const right = Number(input[i].split(" ")[1]);
  if (temp[left]) temp[left] = [...temp[left], right];
  else temp[left] = [right];

  if (temp[right]) temp[right] = [...temp[right], left];
  else temp[right] = [left];
}
// 오름차순으로 정렬
const nodeList = temp.map((el) => el.sort((a, b) => a - b));

const dfsResult = [];
const dfs = (vertex) => {
  if (dfsResult.includes(vertex)) return;
  dfsResult.push(vertex);
  // 정점과 연결된 정점이 있는 경우만 수행
  if (nodeList[vertex])
    nodeList[vertex].forEach((el) => {
      dfs(el);
    });
};
dfs(start);

const bfsResult = [];
const check = [];
const queue = [start];
const bfs = () => {
  const vertex = queue.shift();
  if (check[vertex]) return;
  if (bfsResult.includes(vertex)) return;
  check[vertex] = true;
  bfsResult.push(vertex);
  if (nodeList[vertex])
    nodeList[vertex].forEach((el) => {
      queue.push(el);
    });
};
while (queue.length) {
  bfs(start);
}

console.log(...dfsResult);
console.log(...bfsResult);
// 4 5 6 8 2 10 1 7 3 9
// 4 5 6 10 8 1 2 3 9 7
