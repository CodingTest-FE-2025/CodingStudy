// https://school.programmers.co.kr/learn/courses/30/lessons/87389

/**
 * 방법
 * 1. 2부터 n까지 나누어 떨어지는 수를 찾는다.
 * 2. 나머지가 1이면 해당 수를 리턴한다.
 */

function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(123));
