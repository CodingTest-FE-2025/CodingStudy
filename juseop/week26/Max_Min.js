/**
 * 최대공약수와 최소공배수
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
 * 배열의 맨 앞에는 최대공약수, 그 다음 최소공배수를 넣어 반환하면 된다.
 * 예를들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12를 반환해야한다.]
 *
 * 제한 사항
 * 두 수는 1이상 1000000이하의 자연수이다.
 *
 * 입출력 예
 * n = 3, m = 12 return [3, 12]
 * n = 2, m = 5 return [1, 10]
 */

function solution(n, m) {
  let answer = [];
  let min = Math.min(n, m);
  for (let i = 1; i <= min; i++) {
    if (n % 1 == 0 && m % 1 == 0) {
      if (n % i == 0 && m % i == 0) {
        answer[0] = i; // 최대공약수
      }
    }
  }
  answer[1] = (n * m) / answer[0]; // 최소공배수
  return answer;
}
