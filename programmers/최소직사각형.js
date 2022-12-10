function solution(sizes) {
  const big = [];
  const small = [];
  sizes.map((el) => {
    big.push(el[0] > el[1] ? el[0] : el[1]);
    small.push(el[0] < el[1] ? el[0] : el[1]);
  });
  return Math.max(...big) * Math.max(...small);
}
