function solution(n, members) {
  const 가진돈 = 6000 + n;
  const 낼돈 = 4100 * members;
  const 남은돈 = 가진돈 - 낼돈;
  return 남은돈;
}

function solution(n, members) {
  return 6000 + n - 4100 * members;
}

solution(50000, 12);
solution(35000, 9);
