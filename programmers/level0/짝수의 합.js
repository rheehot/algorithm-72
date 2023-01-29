function solution(n) {
  return new Array(n).fill(1).reduce((acc, cur, i) => {
    if ((cur + i) % 2 === 0) return acc + cur + i;
    else return acc;
  }, 0);
}
