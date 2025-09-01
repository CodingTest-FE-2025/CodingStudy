/**
 * 조이스틱
 *
 * 맨 처음엔 A로만 이루어져 있다.
 * 완성해야하는 이름이 세글자면 AAA, 네글자면 AAAA.
 * 조이스틱을 각 방향으로 움직이면 아래와 같다.
 * ▲ - 다음 알파벳 (A→B, C...Z→A)
 * ▼ - 이전 알파벳 (A→Z, Z→Y...B→A)
 * ◀ - 커서를 왼쪽으로 이동 (첫번째 위치에서 왼쪽 이동시에는 마지막 위치로 이동)
 * ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽 이동시에는 첫번째 위치로 이동)
 *
 * 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있다.
 * 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성.
 * 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
 * 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
 * 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
 *
 * 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return.
 *
 * 제한사항
 * name은 알파벳 대문자로만 이루어져 있다.
 * name의 길이는 1 이상 20 이하이다.
 *
 * 입출력 예
 * name = "JEROEN" return = 56
 * name = "JAN" return = 23
 */

function solution(name) {
  let answer = 0;
  const len = name.length;
  let minMove = len - 1;
  for (let i = 0; i < len; i++) {
    answer += Math.min(name.charCodeAt(i) - 65, 91 - name.charCodeAt(i));
    let nextIndex = i + 1;
    while (nextIndex < len && name.charAt(nextIndex) === "A") {
      nextIndex++;
    }
    minMove = Math.min(
      minMove,
      i + len - nextIndex + Math.min(i, len - nextIndex)
    );
  }
  answer += minMove;
  return answer;
}
