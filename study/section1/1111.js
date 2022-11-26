function solution(arr) {
  const diff = arr.reduce((a, c) => a + c, -100);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i !== j && arr[i] + arr[j] === diff) {
        return arr.filter((_, l) => l !== i && l !== j);
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
