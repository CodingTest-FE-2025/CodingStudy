// https://school.programmers.co.kr/learn/courses/30/lessons/12903

/**
 *
 * a = 전체 길이 구함
 * b = 길이의 반을 구함 floor사용
 *
 * a가 짝수일 경우
 * b-1와 b를 붙여서 리턴
 *
 * a가 홀수일 경우
 * b를 리턴
 *
 */

function solution(s) {
  const a = s.length;
  const b = Math.floor(a / 2);

  return a % 2 === 0 ? s[b - 1] + s[b] : s[b];
}
