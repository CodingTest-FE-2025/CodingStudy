/**
 *  대충 만든 자판
 *  휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 글자가 할당되어 있습니다.
 *  예를 들어, 1번 키에 A, B, C가 할당되어 있다면 1번 키를 한번만 누르면 'A'가 입력되고, 두번 누르면 'B', 세번 누르면 'C'가 입력됩니다.
 *  1번 키붜 차례대로 할당된 문자들이 순서대로 담긴 문자열 배열 keymap과 입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때, 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return
 *
 *  제한 사항
 * - 1 <= keymap.length <= 100
 * -- 1<= keymap[i].length <= 100
 * -- keymap[i]는 i+1번 키에 할당된 문자들이 순서대로 담긴 문자열
 * -- keymap[i]의 원소의 길이는 서로 다를 수 있다.
 * -- keymap[i]는 알파벳 대문자로만 이루어져 있다.
 * - 1<= targets.length <= 100
 * -- 1<= targets[i].length <= 100
 * -- targets[i]는 알파벳 대문자로만 이루어진 문자열
 */

function solution(keymap, targets) {
  let answer = [];
  for (let target of targets) {
    let count = 0;
    for (let char of target) {
      let minPress = Infinity;
      for (let key of keymap) {
        let index = key.indexOf(char);
        if (index !== -1) {
          minPress = Math.min(minPress, index + 1);
        }
      }
      if (minPress === Infinity) {
        count = -1; // 해당 문자를 입력할 수 없는 경우
        break;
      }
      count += minPress;
    }
    answer.push(count);
  }
  return answer;
}
