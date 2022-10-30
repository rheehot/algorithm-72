function solution(arr) {
  // return Math.min(...arr);
  return Math.min.apply(null, arr);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2
