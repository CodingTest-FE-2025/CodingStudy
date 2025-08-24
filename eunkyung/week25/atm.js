const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);

P.sort((a, b) => a - b);

let total = 0;
let current = 0;

for (let i = 0; i < N; i++) {
  current += P[i];
  total += current;
}

console.log(total);
