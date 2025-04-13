// undefined으로 구성된 배열을 생성 (const dp = new Array(n + 1).fill(undefined);)
// 재귀함수 fib
// 0,1 은 바로 리턴 (if (x <= 1) return x;), 값이 같기 때문
// undefined가 아닌건 이미 계산한 값이기 때문에 바로 리턴해줌 (if (dp[x] !== undefined) return dp[x];)
// x번째 피보나치 수를 계산해서 dp[x] 저장 (dp[x] = (fib(x - 1) + fib(x - 2)) % 1234567;)
// 어 씨 런타임에러

function solution(n) {
  const dp = new Array(n + 1).fill(undefined);

  function fib(x) {
    if (x <= 1) return x;
    if (dp[x] !== undefined) return dp[x];

    dp[x] = (fib(x - 1) + fib(x - 2)) % 1234567;
    return dp[x];
  }

  return fib(n);
}

console.log(solution(3));
console.log(solution(5));
