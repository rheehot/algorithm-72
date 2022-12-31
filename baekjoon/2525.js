const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./2525.txt").toString().trim().split("\n");
const hour = input[0].split(" ")[0];
const min = input[0].split(" ")[1];
const start = new Date(2020, 1, 1, hour, min);
const fin = start.getTime() + 60000 * input[1];
console.log(new Date(fin).getHours() + " " + new Date(fin).getMinutes());
