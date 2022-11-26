function solution(str, char) {
  return str.length - str.split(char).join("").length;
}
function solution2(str, char) {
  return str.length - str.replaceAll(char, "").length;
}
function solution3(str, char) {
  return str.split("").filter((el) => el === char).length;
}
function solution4(str, char) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) result++;
    console.log(i);
  }
  return result;
}

console.log(solution4("COMPUTERPROGRAMMING", "R"));
