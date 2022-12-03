function solution(stones, k) {
  let result = 0;
  const recursive = () => {
    let zero = 0;
    for (let i = 0; i < stones.length - 1; i++) {
      if (stones[i] !== 0 && stones[i] !== undefined) stones[i] = --stones[i];
      else zero++;
      if (zero === k) return;
      if (stones[i + 1] > 0 || stones[i + 1] === undefined) zero = 0;
    }
    result++;
    recursive();
  };
  recursive();
  return result;
}
