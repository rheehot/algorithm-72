function solution(input) {
  const set = new Set(input);
  const setArr = [...set].sort((a, b) => b - a);
  return input.map((el) => setArr.indexOf(el) + 1);
}

console.log(solution([87, 89, 92, 100, 76]));
