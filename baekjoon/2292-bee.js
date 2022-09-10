const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
});
rl.on("close", () => {
  let diff = 1;
  let count = 1;
  for (let i = 1; i <= Number(input); i++) {
    if (diff >= Number(input)) {
      console.log(count);
      break;
    }
    count++;
    diff += i * 6;
  }
  process.exit();
});
