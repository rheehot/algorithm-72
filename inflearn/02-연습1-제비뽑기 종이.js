function solution(a, b) {
  const row = a - 1; // 가로 가위질 횟수
  const col = (b - 1) * a; // 세로 가위질 횟수
  return row + col;
}

function solution(a, b) {
  return a - 1 + (b - 1) * a;
}

solution(100, 100); // 9999
solution(1, 1); // 0
solution(20, 50); // 999
