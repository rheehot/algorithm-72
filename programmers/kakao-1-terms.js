function solution(today, terms, privacies) {
  const termList = {};
  terms.forEach((el) => {
    termList[el.split(" ")[0]] = el.split(" ")[1];
  });
  const result = [];
  privacies.forEach((el, i) => {
    const term = el.split(" ")[1];
    const limitDate = new Date(el.split(" ")[0]);
    limitDate.setMonth(limitDate.getMonth() + Number(termList[term]));
    if (limitDate <= new Date(today)) result.push(i + 1);
  });
  return result;
}
