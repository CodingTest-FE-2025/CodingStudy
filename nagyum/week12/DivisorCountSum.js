/** 약수의 갯수와 덧셈
 * 약수의 갯수를 구하는 함수를 만든 다음 재귀형식으로 불러와서 짝수일때 더하고 홀수일때 빼기
 *
 *
 */

function solution(left, right) {
  var answer = 0;

  function compare(i) {
    let num = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) num++;
    }
    return num;
  }

  for (left; left <= right; left++) {
    if (compare(num) % 2 === 0) answer += left;
    else answer -= left;
  }
  return answer;
}
