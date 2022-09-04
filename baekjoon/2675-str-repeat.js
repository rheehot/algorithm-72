const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
input.forEach((el) => {
  const repeatTime = Number(el.split(" ")[0]);
  let temp = "";
  if (el.split(" ")[1])
    el.split(" ")[1]
      .split("")
      .forEach((el) => {
        new Array(repeatTime).fill("").forEach((_) => {
          temp += el;
        });
      });
  if (temp) console.log(temp);
});
