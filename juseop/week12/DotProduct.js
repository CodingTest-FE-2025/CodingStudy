/**
 * 내적
 * 길이가 같은 두 1차원 정수 배열 a, b가 주어질 때,
 * a와 b의 내적을 return 하도록 solution 함수를 구하라.
 *
 * a와 b의 내적
 * a[0] * b[0] + a[1] * b[1] + ... + a[n-1] * b[n-1]
 */

/**
 * 입출력 예
 * a = [1,2,3,4], b = [-3,-1,-2,5] => result = 3
 * a = [-1,0,1], b = [1,0,-1] => result = -2
 */

// a의 1과 b의 -3을 곱하고 a의 2와 b의 -1을 곱하고
// a의 3과 b의 -2를 곱하고 a의 4와 b의 5를 곱한 후 모두 더하면 3이 된다.
// 그러면 그냥 배열을 순회하면서 각각의 값을 곱한 후 더하면 된다.

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
