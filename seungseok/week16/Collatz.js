// https://school.programmers.co.kr/learn/courses/30/lessons/12943

/**
 *
 * num이 1이면 0을 리턴
 * for문을 500번 돌린다
 * num이 1이면 i를 리턴
 * num이 짝수면 num을 2로 나눈다
 * num이 홀수면 num에 3을 곱하고 1을 더한다
 * for문을 500번 돌린 후에도 num이 1이 아니면 -1을 리턴
 */

function solution(num) {
  if (num === 1) return 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) return i;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }

  return -1;
}
