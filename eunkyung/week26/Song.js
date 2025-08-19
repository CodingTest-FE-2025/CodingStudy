const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const scores = input.slice(1, 1 + N).map(Number);
const times = input.slice(1 + N).map(Number);

let result = [];
for (let t of times) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += scores[i];
    if (t < sum) {
      result.push(i + 1);
      break;
    }
  }
}

console.log(result.join("\n"));
