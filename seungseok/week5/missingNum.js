// https://school.programmers.co.kr/learn/courses/30/lessons/86051

/**
 * 방법
 * 1. numbers의 값을 다 더한다.
 * 2. 0부터 9까지 더한 값 45
 * 3. 45에서 numbers를 더한 값을 뺀다.
 */

function solution(numbers) {
  var answer = -1;
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  answer = 45 - sum;
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
