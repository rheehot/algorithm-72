// test 11~15 시간 초과
function solution(x, y) {
  let arr = [];
  x.split("").forEach((el) => {
    if (y.includes(el)) {
      arr.push(el);
      y = y.replace(el, "");
    }
  });
  arr = arr.sort().reverse().join("");
  if (!arr) return "-1";
  if (arr[0] === "0") return "0";
  return arr;
}
