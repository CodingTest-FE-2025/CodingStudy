/** 이진변환 반복하기
 * 문자열의 모든 0을 제거 하고 제거한 길이를 2진법 문자열
 * 해당 방법을 반복하면서 1만 남아있도록,,
 *
 *
 */

function solution(s) {
  let count = 0;
  let removedZero = 0;
  while (s.length > 1) {
    const original = s.length;
    s = s.replace(/0/g, "");
    removedZero += original - s.length;
    s = s.length.toString(2);
    count++;
  }
  return [count, removedZero];
}
