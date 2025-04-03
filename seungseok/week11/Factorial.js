// https://school.programmers.co.kr/learn/courses/30/lessons/120848

/**
 *
 * 1부터 시작
 * 1씩 커짐
 * 1 * 2 * 3 진행
 * n 보다 작아지면 -1 해서 리턴
 *
 */

function solution(n) {
  let answer = 1;
  for (let i = 1; ; i++) {
    answer = answer * i;
    if (answer > n) {
      return i - 1;
    }
  }
}

console.log(solution(3628800));
