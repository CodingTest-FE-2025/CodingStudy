/**
 * 머쓱이는 큰 종이를 1X1 크기로 자르려한다.
 * 예를 들어 2X2 크기의 종이를 1x1 크기로 자르려면 최소 가위질 3번이 필요
 * 정수 M, N이 주어질 때, M*N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록!
 *
 *
 * M=2, N=2 return 3
 * M=2, N=5 return 9
 * M=1, N=1 return 0
 */

function solution(M, N) {
  let answer = 0;
  answer = M * N - 1;
  return answer;
}

// 2X2는 4이고 1X1은 1이다.
// 4-1 = 3
// 2X5는 10이고 1X1은 1이다.
// 10-1 = 9
// 1X1은 1이고 1X1은 1이다.
// 1-1 = 0
