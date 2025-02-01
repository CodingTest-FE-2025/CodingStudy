/**
 * https://www.acmicpc.net/problem/10773 - zero
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./zero.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const arr = [...input].slice(1);

const result = [];
for (i = 0; i < N; i++) {
  if (arr[i] === 0) {
    result.pop();
  } else {
    result.push(arr[i]);
  }
}
let num = 0;
result.forEach((el) => {
  num = num + el;
});

console.log(num);

/**
 * 생각한 방법
 * for문으로 N번 돌며
 * 0이 나오면 pop
 * 0이 아니면 배열에 push
 * 완성된 배열 전부 더하기
 */
