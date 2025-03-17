// https://school.programmers.co.kr/learn/courses/30/lessons/76501

/**
 * 방법
 * 1. for문을 돌면서 absolutes와 signs를 비교한다.
 * 2. true면 더하고 false면 뺀다.
 */

function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
