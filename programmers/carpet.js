function solution(brown, yellow) {
  const yellowList = [];
  for (let h = 1; h <= yellow; h++) {
    if (yellow % h === 0) {
      let w = yellow / h;
      if (h > w) break;
      yellowList.push([w, h]);
    }
  }

  for (let i = 0; i < yellowList.length; i++) {
    const brownH = yellowList[i][1] + 2;
    const brownW = yellowList[i][0] + 2;
    if ((brownW + brownH) * 2 - 4 == brown) return [brownW, brownH];
  }
}
