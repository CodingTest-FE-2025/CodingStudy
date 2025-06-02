/**
 * 숫자의 표현
 * 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현하는 방법이 여러개
 * 예를 들어 15는 다음과 같이 4가지로 표현 가능
 * 1+2+3+4+5 = 15
 * 4+5+6 = 15
 * 7+8 = 15
 * 15 = 15
 * 자연수 n이 매개변수로 주어질 때, 연속된 자연수 들로 n을 표현하는 방법의 수를 return.
 *
 * 제한 사항 n은 10,000 이하의 자연수
 *
 * 입출력 예
 * n = 15 => 4
 */

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return count;
}
// 효율성 통과 실패를 해서 해설을 찾아봄
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      count++;
    }
  }
  return count;
}
//주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수의 개수와 같다고 한다.
