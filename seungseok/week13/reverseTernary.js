// https://school.programmers.co.kr/learn/courses/30/lessons/68935

/**
 * 3진법 뒤집기
 *
 * 1. n을 toString(3) 사용해서 3진법으로 변환하기
 * 2. split('')로 나누기
 * 3. reverse()로 뒤집기
 * 4. join('')로 합치기
 * 5. parseInt(3)으로 10진수로 변환하기
 */

function solution(n) {
  var answer = 0;

  answer = n.toString(3);
  answer = answer.split("");
  answer = answer.reverse();
  answer = answer.join("");
  answer = parseInt(answer, 3);

  return answer;
}

console.log(solution(45)); // 7
