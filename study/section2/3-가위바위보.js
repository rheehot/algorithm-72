function solution(n, aList, bList) {
  return aList.map((_, i) => {
    const a = aList[i];
    const b = bList[i];
    if (a === b) return "D";
    if (a === 1 && b === 3) return "A";
    if (b === 1 && a === 3) return "B";
    if (a > b) return "A";
    return "B";
  });
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
