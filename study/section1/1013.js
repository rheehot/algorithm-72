function solution(A, B, C) {
  const max = Math.max(A, B, C);
  const sum = A + B + C;
  return sum - max > max ? "YES" : "NO";
}

console.log(solution(6, 7, 11)); // "YES"
console.log(solution(13, 33, 17)); // "NO"
