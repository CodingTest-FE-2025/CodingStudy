const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const timeList = input[1].split(" ").map(Number);

timeList.sort((a, b) => a - b);

let total = 0;
for (let i = 0; i < n; i++) {
  const sum = timeList.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0);
  total += sum;
}

console.log(total);
