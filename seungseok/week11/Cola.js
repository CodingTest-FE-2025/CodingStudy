// https://school.programmers.co.kr/learn/courses/30/lessons/132267

/**
 * 마신 콜라의 병 구하는 문제..
 * answer = 0
 * 20개의 공병을 3으로 나눠서 6개의 새로운 콜라얻음 (answer = 6, n = 몫6 + 나머지2)
 * 8개의 공병을 3으로 나눠서 2개의 새로운 콜라얻음 (answer = 8, n = 4)
 * 4개의 공병을 3으로 나눠서 1개의 새로운 콜라얻음 (answer = 9, n = 1)
 * 더 이상 바꿀 수 없으므로 종료 answer 9 return
 */

function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    let newCola = Math.floor(n / a) * b;
    answer += newCola;
    n = newCola + (n % a);
  }
  return answer;
}

console.log(solution(3, 1, 20));
