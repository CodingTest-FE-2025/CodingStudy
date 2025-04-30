// https://school.programmers.co.kr/learn/courses/30/lessons/12985

/**
 *
 * 풀이방법
 *
 * 1. a와 b가 같아질 때까지 반복
 * 2. a와 b를 2로 나눈 후 올림
 * 3. a와 b가 같아지면 반복문을 종료 answer 리턴
 * 4. answer는 1씩 증가
 */

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 4, 7)); // 3
