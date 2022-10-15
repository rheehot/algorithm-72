function solution1(n) {
  const str = String(n / 12).split(".");
  return str[1] ? Number(str[0]) + 1 : Number(str[0]);
}
function solution2(n) {
  return Math.ceil(n / 12);
}
function solution3(n) {
  return n % 12 ? parseInt(n / 12) + 1 : n / 12;
}
function solution4(n) {
  return n % 12 ? ~~(n / 12) + 1 : n / 12;
}
function solution5(n) {
  if (n % 12 === 0) return n / 12;
  let int = "";
  for (let i = 0; i < String(n / 12).length - 1; i++) {
    const str = String(n / 12)[i];
    if (str === ".") break;
    int += str;
  }
  return Number(int) + 1;
}

console.log(solution(178)); // 15
console.log(solution(25)); // 3
console.log(solution(36)); // 3
