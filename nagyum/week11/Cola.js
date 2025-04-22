/*콜라
내가 가진 콜라와 바꿔주는 콜라를 구하면 됨
몫이랑 나머지 만 쓸줄알면 풀 수 있는 문제
*/

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const free = Math.floor(n / a) * b;
    answer += free;
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}
