const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
if (Number(input[1]) >= 45) {
  console.log(input[0] + " " + (Number(input[1]) - 45));
} else {
  const hour = input[0] - 1 === -1 ? "23" : input[0] - 1;
  const remain = 45 - Number(input[1]);
  const min = 60 - remain;
  console.log(hour + " " + min);
}
