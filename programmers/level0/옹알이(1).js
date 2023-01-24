function solution(babbling) {
  let count = 0;
  const pron = ["aya", "ye", "woo", "ma"];
  babbling.forEach((el) => {
    let currentInput = el;
    pron.forEach((pr) => {
      currentInput = currentInput.replace(pr, "|");
    });
    if (currentInput.replaceAll("|", "").length === 0) count++;
  });
  return count;
}
