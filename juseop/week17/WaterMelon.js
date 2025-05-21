/**
 * 수박수박수박수박수?
 * 길이가 n이고, "수박수박수.."와 같은 패턴을 유지하는 문자열을 return
 * n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴
 *
 * 제한사항
 * n은 길이 10,000이하인 자연수
 *
 * 입출력 예
 * n = 3 return "수박수"
 * n = 4 return "수박수박"
 */

function solution(n) {
  let answer = "";
  for (i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}
