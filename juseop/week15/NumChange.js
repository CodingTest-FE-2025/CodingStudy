/**
 * 숫자 변환하기
 * 자연수 x를 y로 변환하려고 한다. 사용할 수 있는 연산은 다음과 같다.
 * 1. x에 n을 더한다.
 * 2. x에 2를 곱한다.
 * 3. x에 3을 곱한다.
 * 자연수 x, y, n이 주어질 때 x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return.
 *
 * 제한사항
 * 1 <= x <= 1,000,000
 * 1 <= n < y
 *
 * 입출력 예
 * x = 10, y = 40, n = 5 result = 2
 * x = 10, y = 40, n = 30 result = 1
 * x = 2, y = 5, n = 4 result = 1
 */

//1. dfs로 풀어보면 될 것 같았다.

function solution(x, y, n) {
  var answer = 0;
  const countList = [];
  const dfs = (x, count) => {
    if (x == y) {
      countList.push(count);
      return;
    }
    if (x > y) {
      return;
    }
    dfs(x + n, count + 1);
    dfs(x * 2, count + 1);
    dfs(x * 3, count + 1);
  };
  dfs(x, 0);

  if (countList.length) {
    answer = Math.min(...countList);
  } else {
    answer = -1;
  }
  return answer;
}
// 이 코드로 하였을 시 런타임 에러가 발생.
// 풀다가 모르겠어서 검색하니 dp로 풀어야 한다고 하여 dp로 풀어보았다.
function solution(x, y, n) {
  var answer = 0;
  let dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0; // x가 x가 되기 위해 필요한 연산 수는 0 이다.

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1); //최단 거리로 계속 업데이트
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }
  return dp[y] == Infinity ? -1 : dp[y];
}
