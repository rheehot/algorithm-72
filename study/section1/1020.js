function useReduce(n) {
  return new Array(n).fill(1).reduce((acc, cur, i) => acc + cur + i);
}
function useReduceWithInitial(n) {
  return new Array(n - 1).fill(1).reduce((acc, cur, i) => acc + cur + i, n);
}
function useForEach(n) {
  let result = 0;
  new Array(n).fill(1).forEach((_, i) => {
    result += 1 + i;
  });
  return result;
}
function useForEachWithInitial(n) {
  let result = n;
  new Array(n).fill(1).forEach((_, i) => {
    result += i;
  });
  return result;
}
function useNativeFor(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
function useNativeForWithInitial(n) {
  let result = n;
  for (let i = 1; i < n; i++) {
    result += i;
  }
  return result;
}

console.log(useNativeFor(1)); // 1
console.log(useNativeFor(6)); // 21
console.log(useNativeFor(10)); // 55
