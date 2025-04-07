function solution(M, N) {
  var answer = 0;
  answer = N - 1 + (M - 1) * N;
  return answer;
}

console.log(solution(2, 5));
