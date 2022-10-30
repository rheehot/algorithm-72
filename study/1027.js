function solution2(arr) {
  let sum = 0;
  let min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) continue;
    sum += arr[i];
    if (!min || arr[i] < min) min = arr[i];
  }
  console.log(sum);
  console.log(min);
}

function solution1(arr) {
  const odd = arr.filter((el) => el % 2 === 1);
  console.log(odd.reduce((a, c) => a + c));
  console.log(Math.min(...odd));
}

solution1([12, 77, 38, 41, 53, 92, 85]); // 256
