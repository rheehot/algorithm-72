const dFunction = (n) => {
  const nList = String(n).split("");
  return nList.reduce((a, c) => a + Number(c), 0) + n;
};
const arr = new Array(10000).fill(1).map((_, i) => i + 1);
const result = [];
arr.forEach((el) => {
  if (dFunction(el) > 10000) return;
  if (!result.includes(dFunction(el))) {
    result.push(dFunction(el));
  }
});
arr.forEach((el) => {
  if (!result.includes(el)) console.log(el);
});
