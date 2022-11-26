function solution(input) {
  return Number(
    input
      .split("")
      .filter((el) => !isNaN(el))
      .join("")
  );
}

console.log(solution("g0en2T0s8eSoft"));
