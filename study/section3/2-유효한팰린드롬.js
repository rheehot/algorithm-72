function solution(input) {
  const str = input.toUpperCase();
  const A = "A".charCodeAt();
  const Z = "Z".charCodeAt();
  const filtered = str
    .split("")
    .filter((el) => el.charCodeAt() >= A && el.charCodeAt() <= Z);
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i] !== filtered[filtered.length - i - 1]) return "NO";
  }
  return "YES";
}

console.log(
  solution(
    "found미ㅑㄴ오래ㅑㅁㄴ패ㅑ머노애 ㅁㄴ.ㅁ ,ㄴ아ㅕㄹ ㅛㅁd7, time: study;ㄹ Yㄹduㄹtㄹsㄹ; ㄹeㄹmㄹ.i/t.,/, .72234532ㄹDnuof"
  )
);

console.log(solution("goafFdadffaoG"));
