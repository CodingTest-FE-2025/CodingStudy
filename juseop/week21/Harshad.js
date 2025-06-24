/**
 * 하샤드 수
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
 * 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어떨어지므로 하샤드 수이다.
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수를 return.
 *
 * 제한 조건
 * x는 1 이상, 10000 이하인 정수이다.
 *
 * 입출력 예
 * x =10, return true
 * x =12, return true
 * x =11, return false
 * x =13, return false
 *
 * 10의 모든 자릿수의 합은 1이다. 10은 1로 나누어 떨어지므로 10은 하샤드 수
 * 12의 모든 자릿수 합은 3이다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수
 * 11의 모든 자릿수 합은 2이다. 11은 2로 나누어 떨어지지 않으므로 11은 하샤드 수가 아니다.
 * 13의 모든 자릿 수의 합은 4이다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아니다.
 *
 */

function solution(x) {
  const sum = String(x);
  let NumberSum = 0;
  for (let i = 0; i < sum.length; i++) {
    NumberSum += parseInt(sum[i]);
  }
  return x % NumberSum === 0;
}
