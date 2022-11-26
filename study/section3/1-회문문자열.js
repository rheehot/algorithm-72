function solution(input) {
  const str = input.toUpperCase();
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return "NO";
  }
  return "YES";
}

console.log(solution("goafFdadffaoG"));
