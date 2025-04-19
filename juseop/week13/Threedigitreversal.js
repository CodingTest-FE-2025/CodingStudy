/**
 * 3진법 뒤집기
 * 자연수 n이 매개변수로 주어질 때, n을 3진법으로 바꿔 뒤집은 후,
 * 이를 다시 10진법으로 표현한 수를 return.
 */

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// 1. toString()을 활용해 3진법으로 변환 후 뒤집기
// 2. parseInt()를 활용해 다시 10진법으로 변환
