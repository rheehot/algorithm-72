function solution(input) {
  const arr = input.split(" ").map((el) => Number(el));
  const max = Math.max(...arr);
  const sum = arr.reduce((a, c) => a + c);
  return sum - max > max ? "YES" : "NO";
}

console.log(solution("6 7 11"));
console.log(solution("13 33 17"));
