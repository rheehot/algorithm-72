const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./2606.txt").toString().trim().split("\n");
const arr = [];
input.forEach((el, i) => {
  if (i !== 0 && i !== 1) {
    arr.push(el.split(" ").map((el) => Number(el)));
  }
});
const node = [];
arr.forEach((el) => {
  if (node[el[0]]) node[el[0]] = [...node[el[0]], el[1]];
  else node[el[0]] = [el[1]];
  if (node[el[1]]) node[el[1]] = [...node[el[1]], el[0]];
  else node[el[1]] = [el[0]];
});
const queue = [1];
const check = new Array(node.length).fill(false);
check[1] = true;
const virus = [];
while (queue.length !== 0) {
  node[queue[0]].forEach((el) => {
    if (!check[el]) {
      check[el] = true;
      queue.push(el);
    }
  });
  if (!virus.includes(queue[0])) virus.push(queue[0]);
  queue.shift();
}
console.log(virus.length - 1);
