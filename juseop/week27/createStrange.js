/**
 * 이상한 문자 만들기
 * 문자열 s는 한개 이상의 단어로 구성되어 있다.
 * 각 단어는 하나 이상의 공백 문자로 구분되어 있다.
 * 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 return하는 함수.
 *
 * 제한 사항
 * 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야한다.
 * 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야한다.
 * 입출력 예
 * s = "try hello world" => result = "TrY HeLlO WoRlD"
 */

function solution(s) {
  let a = s.split(" ");
  return a
    .map((v) => {
      let answer = "",
        num = 0;
      for (let str of v) {
        answer += !(num % 2) ? str.toUpperCase() : str.toLowerCase();
        num++;
      }
      return answer;
    })
    .join(" ");
}
