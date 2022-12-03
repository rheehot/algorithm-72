function solution(record) {
  const answer = [];
  const user = {};

  record.forEach((el) => {
    const operate = el.split(" ")[0];
    const id = el.split(" ")[1];
    const nickname = el.split(" ")[2];
    if (!nickname) return;
    user[id] = nickname;
    if (operate === "Change") user[id] = nickname;
  });

  record.forEach((el) => {
    const operate = el.split(" ")[0];
    const id = el.split(" ")[1];
    if (operate === "Enter") answer.push(user[id] + "님이 들어왔습니다.");
    if (operate === "Leave") answer.push(user[id] + "님이 나갔습니다.");
  });
  return answer;
}
