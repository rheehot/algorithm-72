function solution(input) {
  const result = [];
  for (el of input) {
    if (result.includes(el)) {
      continue;
    }
    result.push(el);
  }
  return result;
}


console.log(solution(["good", "time", "good", "time", "student"]));
