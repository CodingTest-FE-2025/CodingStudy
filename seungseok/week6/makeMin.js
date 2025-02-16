// https://school.programmers.co.kr/learn/courses/30/lessons/12941

/**
 * 1. 두 배열의 오름차순과 내림차순을 구함
 * 2. for문 돌며 A[i] * B[i] 을 더함
 */

function solution(A, B) {
  var answer = 0;
  const arrA = [...A].sort((a, b) => a - b);
  const arrB = [...B].sort((a, b) => b - a);
  const num = A.length;

  for (let i = 0; i < num; i++) {
    answer += arrA[i] * arrB[i];
  }
  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
