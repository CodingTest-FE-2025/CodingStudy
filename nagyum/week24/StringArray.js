/**
 * 문자열 내 마음대로 정렬하기
 *
 * 각 문자열의 인덱스 n 번째 글자를 기준으로 오름차순 정렬
 *
 */

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    return a[n].localeCompare(b[n]);
  });
}
