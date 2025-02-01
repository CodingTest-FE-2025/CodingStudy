//https://www.acmicpc.net/problem/2164

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./card.txt")
  .toString()
  .trim();
let num = parseInt(input);

/* 시간초과
let arr = [];
let answer = null;
let order = true;
for (i = num; i > 0; i--) {
  arr.push(i);
}

for (let i = 0; arr.length > 1; i++) {
  if (order) {
    arr.shift();
    order = false;
  } else {
    arr.push(arr.shift());
    order = true;
  }
}
answer = arr[0];
console.log(answer);
*/

let answer = null;
let queue = [];
let start = 0; // 큐의 시작 인덱스
let size = num; // 현재 큐 크기
let order = true;

// 큐 초기화
for (let i = 1; i <= num; i++) {
  queue.push(i);
}

// 큐 동작 시뮬레이션
while (size > 1) {
  if (order) {
    // 첫 번째 요소를 제거하는 대신 시작 인덱스만 이동
    start = (start + 1) % queue.length;
    size--; // 큐 크기 감소
    order = false;
  } else {
    // 첫 번째 요소를 큐의 끝으로 이동하는 대신 인덱스 계산
    queue[(start + size) % queue.length] = queue[start];
    start = (start + 1) % queue.length; // 시작 인덱스 이동
    order = true;
  }
}

answer = queue[start];
console.log(answer);

/**
 * 생각한 방법
 * 1. 1씩 줄여서 arr 배열로 저장 [6,5,4,3,2,1]
 * 2. order 번갈아가면서 true false로 순서 변경
 * 3. arr 1개 남을때 까지 반복문
 * 4. true면 앞에제거
 * 5. false면 앞에제거 후 제거한거 push
 * 6. 남은 배열 첫번째
 */
