const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("./10250-acm-hotel.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();
input.forEach((el) => {
  const totalH = el.split(" ")[0];
  const customer = el.split(" ")[2];
  const h = Math.ceil(customer / totalH);
  const r = customer - (h - 1) * totalH;
  console.log(r + h.toString().padStart(2, "0"));
});
