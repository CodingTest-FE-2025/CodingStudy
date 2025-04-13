function solution(M, N) {
  var answer = 0;
  if (M === 1 && N === 1) return 0;
  else answer = M - 1 + (N - 1) * M;
  return answer;
}
