function solution(input) {
  if (input.length % 2) {
    return input.slice(~~(input.length / 2), Math.ceil(input.length / 2));
  }
  return input.slice(input.length / 2 - 1, input.length / 2 + 1);
}

console.log(solution("study"));
console.log(solution("good"));
console.log(solution("goofffd"));
