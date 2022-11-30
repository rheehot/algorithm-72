/*

    괄호 짝짓기

    괄호로 이루어진 문자열 str이 주어집니다.
    괄호의 종류에는 소괄호'()', 중괄호'{}', 대괄호'[]'가 있습니다.
    주어진 문자열 str 내의 괄호를 각각 짝지어
    짝이 모두 맞다면 true, 아니면 false를 반환하세요.

    괄호가 열렸다면 같은 종류의 괄호로만 닫을 수 있습니다.
    같은 의미로 닫는 괄호가 있다면 같은 종류의 괄호로 열려있어야 합니다.

    str의 길이는 1 이상 104 이하이며,
    소괄호'()', 중괄호'{}', 대괄호'[]' 이외의 다른 문자열은 들어오지 않습니다.

    input       output
    ------------------
    str
    -------------------
    "()"        true
    "(]"        false

*/
function matchParentheses(str) {
  // 여기에서 작업하세요
  let small = 0;
  let medium = 0;
  let large = 0;

  str.split("").forEach((el) => {
    if (el === "(") small++;
    if (el === "{") medium++;
    if (el === "[") large++;
    if (el === ")") small--;
    if (el === "}") medium--;
    if (el === "]") large--;
    if (small < 0 || medium < 0 || large < 0) return false;
  });
  if (small === 0 && medium === 0 && large === 0) return true;
  return false;
}

module.exports = matchParentheses;
