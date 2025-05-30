/**
 * 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있다.
 * str에 나타나는 숫자 중 최소값과 최대값을 찾아 "(최소값) (최대값)"형태의 문자열을 반환하는 함수
 * s가 "1 2 3 4"라면 "1 4"를 반환.
 * "-1 -2 -3 -4"라면 "-4 -1"을 반환.
 *
 * 제한조건
 * s에는 둘 이상의 정수가 공백으로 구분되어 있다.
 *
 * 입출력예
 * s = "1 2 3 4" return "1 4"
 * s = "-1 -2 -3 -4" return "-4 -1"
 * s = "-1 -1" return "-1 -1"
 */

function solution(s) {
  const numbers = s.split(" ").map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return `${min} ${max}`;
}
