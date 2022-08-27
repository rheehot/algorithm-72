const fs = require("fs");
const { join } = require("path/posix");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let number = Number(input[0].split(" ")[1]);
let cardList = input[1].split(" ").sort();
let result = 0;
cardList.forEach((_, i1) => {
  cardList.forEach((_, i2) => {
    if (i1 >= i2) return;
    cardList.forEach((_, i3) => {
      if (i2 >= i3 || i1 >= i3) return;
      const sum =
        Number(cardList[i1]) + Number(cardList[i2]) + Number(cardList[i3]);
      if (sum > number) return;
      if (sum > result) result = sum;
    });
  });
});
console.log(result);
