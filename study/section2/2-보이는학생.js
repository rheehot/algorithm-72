function solution(input) {
  const result = [input[0]];
  for (let i = 1; i < input.length; i++) {
    if (result[result.length - 1] < input[i]) result.push(input[i]);
  }
  return result.length;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
