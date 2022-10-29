const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./7576.txt").toString().trim().split("\n");
const row = Number(input[0].split(" ")[0]);
const column = Number(input[0].split(" ")[1]);
const tomato = input.map((el, i) => {
  return el.split(" ").map((el) => Number(el));
});
tomato.shift();

let day = 0;

let temp = false;
for (let i = 0; i < tomato.length - 1; i++) {
  if (tomato[i].includes(0)) {
    temp = true;
    break;
  }
}
if (!temp) {
  console.log(0);
  return;
} else bfs(tomato);

function bfs(tomato) {
  const tomato2 = tomato.map((el) => el.map((el) => el));
  let check = false;
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if (tomato[i][j] === 1) {
        if (i - 1 >= 0 && tomato[i - 1][j] === 0) {
          check = true;
          tomato2[i - 1][j] = 1;
        }
        if (i + 1 <= column - 1 && tomato[i + 1][j] === 0) {
          check = true;
          tomato2[i + 1][j] = 1;
        }
        if (j - 1 >= 0 && tomato[i][j - 1] === 0) {
          check = true;
          tomato2[i][j - 1] = 1;
        }
        if (j + 1 <= row - 1 && tomato[i][j + 1] === 0) {
          check = true;
          tomato2[i][j + 1] = 1;
        }
      }
    }
  }
  if (check) {
    day++;
    bfs(tomato2);
  } else {
    for (let i = 0; i < tomato.length - 1; i++) {
      if (tomato2[i].includes(0)) {
        console.log(-1);
        return;
      }
    }
    console.log(day);
  }
}
