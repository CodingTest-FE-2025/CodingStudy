const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = new Array(10000).fill(0);
const drink = new Array(10000).fill(0);

// 포도주 양 입력
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(input[i + 1]);
}

// 초기 상태 설정
drink[0] = arr[0];
drink[1] = arr[0] + arr[1];
drink[2] = Math.max(arr[2] + arr[1], arr[2] + arr[0], drink[1]);

for (let i = 3; i < n; i++) {
  drink[i] = Math.max(
    drink[i - 1],
    arr[i] + drink[i - 2],
    arr[i] + arr[i - 1] + drink[i - 3]
  );
}

console.log(Math.max(...drink.slice(0, n)));
