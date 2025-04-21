/**
 * 숫자 문자열과 영단어
 * 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는게임.
 * 1478 -> "one4seveneight"
 * 234567 -> "23four5six7"
 * 10203 -> "1zerotwozero3"
 * 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 S가 주어진다.
 * S가 의미하는 원래숫자를 return하라.
 *
 * 각 숫자에 대응하는 영단어
 * 0 : "zero"
 * 1 : "one"
 * 2 : "two"
 * 3 : "three"
 * 4 : "four"
 * 5 : "five"
 * 6 : "six"
 * 7 : "seven"
 * 8 : "eight"
 * 9 : "nine"
 */

//
function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < words.length; i++) {
    s = s.replaceAll(words[i], i); // 모든 영단어를 해당 숫자로 치환
  }

  return Number(s); // 최종적으로 숫자로 변환
}

//1. words 배열을 만들어 각 숫자에 대응하는 영단어를 저장
//2. 문자열 S에서 영단어가 존재하면 replaceAll() 메서드를 사용하여 해당 영단어를 숫자로 치환
//3. 변환된 문자열을 Number()를 사용하여 숫자로 변환
