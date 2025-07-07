/**
 * 시저 암호
 *
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저암호라고 한다.
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 된다.
 * "z"는 1만큼 밀면 "a"가 된다. 문자열 S와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수를 return.
 *
 * 제한 조건
 * 공백은 아무리 밀어도 공백이다.
 * s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있다.
 * s의 길이는 8000이하이다.
 * n은 1이상, 25이하인 자연수이다.
 *
 * 입출력 예
 * s = "AB", n =1, return "BC"
 * s = "z", n =1, return "a"
 * s = "a B z", n =4, return "e F d"
 */

function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (s[i] === " ") {
      result += " ";
    } else if (charCode >= 65 && charCode <= 90) {
      // 대문자
      result += String.fromCharCode(((charCode - 65 + n) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // 소문자
      result += String.fromCharCode(((charCode - 97 + n) % 26) + 97);
    }
  }
  return result;
}
