/**
 * 가운데 글자 가져오기
 * 단어 S의 가운데 글자를 반환하는 함수를 만들어라.
 *
 * 단어의 길이가 짝수라면 가운데 두글자를 반환하면 된다.
 *
 * 제한 사항
 * S는 길이가 1 이상, 100이하인 단어이다.
 *
 * 입출력 예
 * S = "abcde" => "c"
 * S = "qwer" => "we"
 */

function solution(s) {
  let answer = "";
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s[mid - 1] + s[mid];
  } else {
    answer = s[mid];
  }
  return answer;
}
