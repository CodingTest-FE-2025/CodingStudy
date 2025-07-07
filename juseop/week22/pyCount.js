/**
 * 문자열 내 p와 y의 개수
 *
 * 대문자와 소문자가 섞여있는 문자열 s가 주어진다.
 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return.
 *
 * 'p'와 'y' 모두 하나도 없는 경우는 항상 True를 반환.
 * 단, 개수를 비교할 때는 대소문자를 구분하지 않는다.
 *
 * 제한 사항
 * 문자열 s의 길이 : 50 이하의 자연수
 * 문자열 s는 알파벳으로만 이루어져 있다.
 *
 * 입출력 예
 * s = "pPoooyY" answer = True
 * s = "Pyy" answer = False
 */

function solution(s) {
  const UpperS = s.toUpperCase();
  const pCount = UpperS.split("P").length - 1;
  const yCount = UpperS.split("Y").length - 1;
  return pCount === yCount;
}
