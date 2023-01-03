const fs = require("fs");
const input = fs.readFileSync("./2178.txt").toString().trim().split("\n");
const y = input[0].split(" ")[0] - 1;
const x = input[0].split(" ")[1] - 1;
const arr = input.filter((_, i) => i !== 0).map((el) => el.split(""));
const check = [...arr];
let result = 0;
let fin = false;

const bfs = (i, j) => {
  if (i === y && j === x) {
    console.log(result);
    fin = true;
    return;
  }
  if (check[i][j] === true) return;
  check[i][j] = true;
  console.log(check);
  console.log(i, j);
  if (i + 1 > y || arr[i + 1][j] === "0") return;
  else dfs(i + 1, j);

  if (j + 1 > x || arr[i][j + 1] === "0") return;
  else dfs(i, j + 1);
  result++;
};

for (let i = 0; i <= y; i++) {
  for (let j = 0; j <= x; j++) {
    if (fin) return;
    // bfs(i, j);
  }
}
