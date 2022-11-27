function solution(input) {
  return input
    .split("")
    .map((el) => {
      if (el === el.toUpperCase()) return el.toLowerCase();
      else return el.toUpperCase();
    })
    .join("");
}

console.log(solution(`StuDY`)); // sTUdy
