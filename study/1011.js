function solution1(a, b, c) {
  return Math.min(a, b, c);
}
function solution2(a, b, c) {
  let min = a;
  if (min > b) min = b;
  if (min > c) min = c;
  return min;
}

console.log(solution1(6, 5, 11));
console.log(solution2(6, 5, 11));
