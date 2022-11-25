function solution(input) {
  let max = 0;
  let rightCrossSum = 0;
  let leftCrossSum = 0;
  for (let i = 0; i < input.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < input.length; j++) {
      rowSum += input[i][j];
      colSum += input[j][i];
    }
    if (rowSum > max) max = rowSum;
    if (colSum > max) max = colSum;
    rightCrossSum += input[i][i];
    leftCrossSum += input[i][input.length - i - 1];
  }
  return Math.max(max, rightCrossSum, leftCrossSum);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
