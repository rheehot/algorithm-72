function solution(input) {
  let result = 0;
  input.split("").forEach((el) => {
    if (el === el.toUpperCase()) result++;
  });
  return result;
}

console.log(solution(`KoreaTimeGood`)); // 3
