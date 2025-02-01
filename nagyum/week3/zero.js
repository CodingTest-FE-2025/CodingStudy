/**
 * 제로
 * K개의 정수가 주어짐
 * 정수를 기록한 stack 생성
 * 정수가 0 -> 최근 작성한 숫자 pop
 * 정수가 0이 아니면 -> stack에 push
 */

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0]; // 첫 번째 입력은 숫자의 개수
const stack = [];

for (let i = 1; i <= N; i++) {
  if (input[i] === 0) {
    stack.pop(); // 0이면 스택에서 마지막 숫자 제거
  } else {
    stack.push(input[i]); // 0이 아니면 스택에 추가
  }
}

const result = stack.reduce((acc, cur) => acc + cur, 0); // 스택 합산
console.log(result);
