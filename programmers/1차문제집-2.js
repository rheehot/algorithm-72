// test11 실패
function solution(want, number, discount) {
  let result = 0;

  const wantList = [];
  want.forEach((el, i) => {
    new Array(number[i]).fill("").forEach(() => {
      wantList.push(el);
    });
  });

  discount.forEach((_, i) => {
    let nowDiscount = discount.slice(0 + i, wantList.length + i);
    if (nowDiscount.length < 10) {
      nowDiscount = [
        ...nowDiscount,
        ...discount.slice(0, 10 - nowDiscount.length),
      ];
    }

    if (
      JSON.stringify(wantList.sort()) === JSON.stringify(nowDiscount.sort())
    ) {
      result += 1;
    }
  });
  return result;
}
