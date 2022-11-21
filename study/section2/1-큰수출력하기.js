function solution(input) {
  const result = [input[0]];
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] < input[i]) result.push(input[i]);
  }
  return result;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
