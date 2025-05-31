/**
 * 문자열 내림차순으로 배치하기
 * 문자열 S에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 return
 * s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주.
 *
 * 제한사항
 * str은 길이 1 이상인 문자열이다.
 *
 * 입출력 예
 * s = "Zbcdefg"
 * result = "gfedcbZ"
 */

// 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열을 return
//1. split() : 문자열을 배열로 나누는 메서드
//2. sort() : 배열을 정렬하는 메서드
//3. reverse() : 배열을 역순으로 정렬하는 메서드
//4. join() : 배열을 문자열로 합치는 메서드
function solution(s) {
  let answer = "";
  return (answer = s.split("").sort().reverse().join(""));
}
