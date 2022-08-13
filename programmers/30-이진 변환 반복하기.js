function solution(s) {
  let count = 0; // "1"이 나올 때까지 시도한 횟수
  let remove = 0; // "0"을 제거한 총 횟수

  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    const num = temp.length;
    s = num.toString(2);
  }
  return [count, remove];
}

function solution(s) {
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") return [count, remove];
    count++;

    // "0" 제거하고, 숫자 카운트
    remove += s.split("").filter((el) => el === "0").length;
    // "1"만 남긴다.
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);
    return recursion();
  }
  return recursion(); // recursion 함수가 리턴하는 값을 리턴한다.
}
