function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt.toString().includes(".") ? -1 : (sqrt + 1) ** 2;
}

solution(121); //144
solution(3); //-1
