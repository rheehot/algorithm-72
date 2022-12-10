function solution(sizes) {
  const big = [];
  const small = [];
  sizes.map((el) => {
    big.push(Math.max(...el));
    small.push(Math.min(...el));
  });
  return Math.max(...big) * Math.max(...small);
}
