/**
 * 시저 암호
 * 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 방법
 * 아스키 코드 넘 오랜만이라 로직 찾아봄
 */

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === " ") {
      answer += " "; // 공백은 그대로
    } else {
      const code = s.charCodeAt(i);

      // 대문자
      if (code >= 65 && code <= 90) {
        answer += String.fromCharCode(((code - 65 + n) % 26) + 65);
      }
      // 소문자
      else if (code >= 97 && code <= 122) {
        answer += String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
    }
  }

  return answer;
}
