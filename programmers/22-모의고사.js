function solution(answers) {
  const routin = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const full = [[], [], []];
  answers.map((el, i) => {
    full[0].push(routin[0][i % routin[0].length]);
    full[1].push(routin[1][i % routin[1].length]);
    full[2].push(routin[2][i % routin[2].length]);
  });
  const corrects = [0, 0, 0];
  answers.map((el, i) => {
    if (el === full[0][i]) corrects[0]++;
    if (el === full[1][i]) corrects[1]++;
    if (el === full[2][i]) corrects[2]++;
  });

  const result = [];
  corrects.map((el, i) => {
    if (el === Math.max(corrects[0], corrects[1], corrects[2]))
      result.push(i + 1);
  });

  return result;
}

// for
const answerTable = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const answer = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        answer[l]++;
      }
    }
  }
  const biggest = Math.max(...answer);
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === biggest) {
      result.push(i + 1);
    }
  }
  return result;
}

// reduce
const answerTable = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  const biggest = Math.max(...scoreList.map((el) => el.score));
  return scoreList.filter((el) => el.score === biggest).map((el) => el.student);
}
