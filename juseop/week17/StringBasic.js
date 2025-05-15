/**
 * 문자열 다루기 기본
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
 *
 * 제한 사항
 * s는 길이 1이상, 길이 8 이하인 문자열
 * s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로만 이루어져 있음
 *
 * 입출력 예
 * s = "a234" return false
 * s = "1234" return true
 */

function solution(s) {
  let answer = true;
  let S = s.length;
  if (S === 4 || S === 6) {
    for (let i = 0; i < S; i++) {
      if (s[i] < "0" || s[i] > "9") {
        answer = false;
        break;
      }
    }
  } else {
    answer = false;
  }
  return answer;
}
