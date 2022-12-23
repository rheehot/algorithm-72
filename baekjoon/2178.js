const fs = require("fs");
const input = fs.readFileSync("./2178.txt").toString().trim().split("\n");
console.log(input);
const N = input[0].split(" ")[0];
const M = input[0].split(" ")[1];
console.log(N, M);
const arr = input.filter((_, i) => i !== 0).map((el) => el.split(""));
console.log(arr);
