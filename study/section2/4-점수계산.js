function solution(input) {
  let casacading = 0;
  let result = 0;
  for (let el of input) {
    if (el) result += ++casacading;
    else casacading = 0;
  }
  return result;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1]));
