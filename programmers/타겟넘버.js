function solution(numbers, target) {
  const operate = ["+", "-"];
  let result = 0;

  const getOperate = (statement, index) => {
    if (numbers.length === index) {
      if (eval(statement) === target) {
        result++;
      }
      return;
    } else {
      operate.forEach((el) => {
        // 기존 식 + 연산자 + 다음 피연산자, 다음 피연산자 index
        return getOperate(statement + el + numbers[index], index + 1);
      });
    }
  };

  getOperate("", 0);

  return result;
}
