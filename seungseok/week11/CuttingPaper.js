// https://school.programmers.co.kr/learn/courses/30/lessons/120922

/**
 * 가로 M, 세로 N
 * 가로 횟수 M - 1
 * 세로 횟수 M * (N - 1)
 */

function solution(M, N) {
  var answer = 0;
  answer = M - 1 + M * (N - 1);
  return answer;
}
