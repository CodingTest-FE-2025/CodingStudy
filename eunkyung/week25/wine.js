const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const wine = [0];
for (let i = 1; i <= n; i++) {
  wine[i] = Number(input[i]);
}

const dp = new Array(n + 1).fill(0);
dp[1] = wine[1];
if (n >= 2) dp[2] = wine[1] + wine[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + wine[i],
    dp[i - 3] + wine[i - 1] + wine[i]
  );
}

console.log(dp[n]);
