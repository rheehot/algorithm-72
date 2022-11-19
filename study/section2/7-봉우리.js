function solution(input) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const dfs = (number, y, x) => {
    for (let i = 0; i < 4; i++) {
      if (y + dy[i] < 0 || y + dy[i] > input.length - 1) continue;
      if (x + dx[i] < 0 || x + dx[i] > input.length - 1) continue;
      if (input[y + dy[i]][x + dx[i]] >= number) return false;
    }
    return true;
  };

  let result = 0;
  input.forEach((row, y) => {
    row.forEach((el, x) => {
      if (dfs(el, y, x)) result++;
    });
  });

  return result;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
