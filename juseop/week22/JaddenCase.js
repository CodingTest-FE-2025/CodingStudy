/**
 * JaddenCase 문자열 만들기
 *
 * JadenCase란 모든 단어의 첫문자가 대문자이고,
 * 그외의 알파벳은 소문자인 문자열이다.
 * 단, 첫문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면된다.
 * 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수 solution을 완성해라.
 *
 * 제한 조건
 * s는 길이 1이상 200이하인 문자열이다.
 * s는 알파벳과 숫자, 공백문자(' ')로 이루어져 있다.
 * 숫자는 단어의 첫 문자로만 사용된다.
 * 숫자로만 이루어진 단어는 없다.
 *
 * 입출력 예
 * s = "3people unFollowed me" return = "3people Unfollowed Me"
 * s = "for the last week" return = "For The Last Week"
 */

function solution(s) {
  let words = s.split(" ");
  let answer = words.map(
    (a) => a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()
  );
  return answer.join(" ");
}
