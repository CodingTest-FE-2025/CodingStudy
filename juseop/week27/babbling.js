/**
 * 옹알이2
 * 조카는 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음 밖에 하지 못하고,
 * 연속해서 같은 발음을 하는 것을 어려워한다.
 * 문자열 배열 babbling이 매개변수로 주어질 때,
 * 조카가 발음할 수 있는 단어의 개수를 return.
 *
 * 제한 사항
 * 1 ≤ babbling의 길이 ≤ 100
 * 1 ≤ babbling[i]의 길이 ≤ 30
 * babbling[i]는 소문자만으로 이루어져 있다.
 *
 * 입출력 예
 * babbling = ["aya", "yee", "u", "maa"] => result = 1
 * babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"] => result = 2
 */

function solution(babbling) {
  const cantalk = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  babbling.map((word) => {
    cantalk.map((talk) => {
      if (word.indexOf(talk.repeat(2)) === -1) {
        word = word.split(talk).join(" ");
      }
    });
    if (word.trim().length === 0) answer++;
  });
  return answer;
}
