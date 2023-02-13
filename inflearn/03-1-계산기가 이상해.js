function solution(num1, num2) {
  const num1Type = typeof num1;
  const num2Type = typeof num2;
  return num1Type + " " + num2Type;
}

function solution(num1, num2) {
  return typeof num1 + " " + typeof num2;
}

solution("9", 10);
solution(19, 1);
solution("2", "14");
