const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = fs.readFileSync("./11723.txt").toString().trim().split("\n");
let s = [];
for (let i = 1; i < input.length; i++) {
  const command = input[i].split(" ")[0];
  const el = input[i].split(" ")[1];
  if (command === "add" && !s.includes(el)) s.push(el);
  if (command === "remove" && s.includes(el)) s.splice(s.indexOf(el), 1);
  if (command === "check" && s.includes(el)) console.log(1);
  else if (command === "check" && !s.includes(el)) console.log(0);
  if (command === "toggle" && s.includes(el)) s.splice(s.indexOf(el), 1);
  else if (command === "toggle" && !s.includes(el)) s.push(el);
  if (command === "all") s = new Array(20).fill(1).map((_, i) => i + 1);
  if (command === "empty") s = [];
}
