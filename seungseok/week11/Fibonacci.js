// https://school.programmers.co.kr/learn/courses/30/lessons/12945

/**
 *
 *  0 1 1 2 3 5 8 13 21
 *
 */

// function solution(n) {
//   if (n <= 1) return n;

//   return (solution(n - 1) + solution(n - 2)) % 1234567;
// }

function solution(n) {
  // 0과 1인 경우 그대로 리턴
  if (n <= 1) return n;

  // 처음 0, 1 설정
  const dp = [0, 1];

  // 2부터 시작하는 이유 : 처음 0과 1 설정 했기 때문
  for (let i = 2; i <= n; i++) {
    // const dp = [0, 1];  0, 1은 이미 있음
    // dp[2] = 1;          2 추가됨 → dp = [0, 1, 1]
    // dp[3] = 2;          3 추가됨 → dp = [0, 1, 1, 2]
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    // dp[i]에 숫자 대입 push와 같은 느낌
  }

  return dp[n];
}

console.log(solution(10));
