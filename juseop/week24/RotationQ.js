/**
 * 문자열 내 마음대로 정렬하기
 *
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 한다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 문자열의 인덱스 1번째 글자인 'u', 'e', 'a'를 기준으로 정렬한다.
 *
 * 제한 조건
 * - strings의 길이는 1 이상 50 이하입니다.
 * - strings의 원소는 소문자 알파벳으로 이루어져 있다.
 * - strings의 원소는 길이가 1 이상 100 이하입니다.
 * - 모든 strings의 원소의 길이는 n보다 크다.
 * - 인덱스 1의 문자가 같은 문자열이 여럿일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치한다.
 *
 * 입출력 예
 * strings=["sun", "bed", "car"], n=1 => return=["car", "bed", "sun"]
 * strings=["abce", "abcd", "cdx"], n=2 => return=["abcd", "abce", "cdx"]
 */

function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    else if (a[n] > b[n]) return 1;
    else {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });

  return answer;
}
