function solution(age) {
  if (age <= 3) {
    return "분유 스틱";
  } else if (age <= 7) {
    return "초콜릿과 사탕";
  } else {
    return "쿠키";
  }
}

solution(7);
solution(2);
solution(19);
