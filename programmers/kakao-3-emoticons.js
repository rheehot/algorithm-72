function solution(users, emoticons) {
  // 고려해야할 할인
  const usersSaleLimit = [];
  users.forEach((el) => {
    usersSaleLimit.push(el[0]);
  });
  const maxSale = Math.ceil(Math.max(...usersSaleLimit) / 10) * 10;
  const minSale = Math.ceil(Math.min(...usersSaleLimit) / 10) * 10;
  const sale = [10, 20, 30, 40];
  const availSaleList = sale.filter((el) => el >= minSale && el <= maxSale);

  const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
      const permutations = getPermutations(origin, num - 1);
      const attached = permutations.map((v) => [fixed, ...v]);
      results.push(...attached);
    });
    return results;
  };
  const saleList = getPermutations(availSaleList, emoticons.length);

  let regist = 0;
  let amount = [];

  saleList.forEach((sale) => {
    let thisSaleRegist = 0;
    let thisSaleAmount = 0;
    users.forEach((user) => {
      let userPay = [0];

      new Array(emoticons.length).fill("").forEach((_, i) => {
        userPay = [0];
        const cost = (emoticons[i] * (100 - sale[i])) / 100;
        // 이 유저가 구매 가능한 할인율이면
        if (user[0] <= sale[i]) {
          userPay.push(cost);
        }
      });
      // 가입할 금액을 넘으면
      if (userPay.reduce((a, c) => a + c) > user[1]) {
        // 가입
        thisSaleRegist++;
      }
      // 가입 안하고 구입
      thisSaleAmount = userPay.reduce((a, c) => a + c);
    });
    if (thisSaleRegist >= regist) {
      regist = thisSaleRegist;
      amount.push(thisSaleAmount);
    }
    thisSaleRegist = 0;
    thisSaleAmount = 0;
  });
}

solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);
// [1, 5400]

// solution(
// [[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900])
// [4, 13860]
