function solution(month) {
  // 각 분기마다 세개의 달이 존재하므로, 3으로 나누고 올림 처리
  return Math.ceil(month / 3);
}

solution(4); // 2
solution(12); // 4
