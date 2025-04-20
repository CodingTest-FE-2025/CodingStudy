/** 종이 자르기
 * 가로든 세로든 -1 씩 자르면 되니까 뭐든 하나 -1을 하고 나머지 하나를 다른 나머지 만큼 반복
 */

function solution(M, N) {
  var answer = 0;
  if (M === 1 && N === 1) return 0;
  else answer = M - 1 + (N - 1) * M;
  return answer;
}
