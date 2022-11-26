function solution(input) {
  const today = input.split("\n")[0];
  const car = input.split("\n")[1].split(" ");
  return car.filter((el) => el.split("")[1] === today).length;
}

console.log(
  solution(`3
  25 23 11 47 53 17 33`)
); // 3
console.log(
  solution(`0
  12 20 54 30 87 91 30`)
); //3
