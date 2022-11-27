function solution(input) {
  const length = input.map((el) => el.length);
  const max = Math.max(...length);
  for (let el of input){
    if(el.length===max) return el
  }
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]))
