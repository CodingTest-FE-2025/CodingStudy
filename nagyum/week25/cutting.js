const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lengths = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...lengths);
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = 0;

  for (let i = 0; i < K; i++) {
    count += Math.floor(lengths[i] / mid);
  }

  if (count >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
