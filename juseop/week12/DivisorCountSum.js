/**
 * 약수의 개수와 덧셈
 * 두 정수 left와 right가 주어질 때,
 * left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
 * 약수의 개수가 홀수인 수는 뺀 수를 return하는 함수
 *
 * left가 13, right가 17일 때, result는 43이다.
 * 13,14,15,16,17까지의 수들의 약수를 구하고 약수의 개수가 짝수인 수는 더하고 홀수인 수는 빼면 43이 나온다.
 * left가 24, right가 27일 때, result는 52이다.
 */

//그러면 우선 약수를 구하는 방법을 알아야한다.
//그리고 그 약수의 개수가 짝수인지 홀수인지 구분해야한다.

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count++;
        if (i / j !== j) count++;
      }
    }
    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
