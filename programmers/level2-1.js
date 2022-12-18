function solution(dirs) {
  console.log(dirs);
  let x = 0;
  let y = 0;
  const path = [];
  dirs.split("").forEach((el) => {
    // 이동해서 도착한 좌표
    let newX = x;
    let newY = y;
    // 이동 전 위치
    let prev = [x, y];
    if (el === "U") newY++;
    if (el === "D") newY--;
    if (el === "R") newX++;
    if (el === "L") newX--;
    if (newX < -5 || newX > 5 || newY < -5 || newY > 5) return;
    x = newX;
    y = newY;
    // 이동 후 위치
    let after = [x, y];
    if (JSON.stringify(path).includes(JSON.stringify([...prev, ...after])))
      return;
    path.push([...prev, ...after]);
  });
  return path.length;
}

solution("ULURRDLLU");
