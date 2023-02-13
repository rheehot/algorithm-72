function solution(year) {
  if (year === 3) {
    return 5;
  } else if (year === 5) {
    return 12;
  } else if (year === 10) {
    return 30;
  } else {
    return 0;
  }
}
function solution(year) {
  if (year === 3) {
    return 5;
  }
  if (year === 5) {
    return 12;
  }
  if (year === 10) {
    return 30;
  }
  return 0;
}

solution(3);
solution(4);
solution(5);
solution(7);
solution(10);
