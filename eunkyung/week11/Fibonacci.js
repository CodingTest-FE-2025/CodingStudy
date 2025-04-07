function solution(n) {
  let F = [0, 1];
  for (let i = 0; i <= n; i++) {
    if (i > 1) {
      F[i] = (F[i - 2] % 1234567) + (F[i - 1] % 1234567);
    }
  }
  const answer = F[n] % 1234567;
  return answer;
}

console.log(solution(3)); //2
