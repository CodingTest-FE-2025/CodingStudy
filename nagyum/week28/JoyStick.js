/** 조이스틱
 * 맨 처음에는 a로만 이뤄져있고, 단어 완성까지 이동 해야되는 count 수
 */

function solution(name) {
  var answer = 0;
  const min = 65;
  const max = 90 + 1;
  const charToNum = (now) => {
    const num = now.charCodeAt();
    if (num < 78) return num - 65;
    else return 91 - num;
  };

  const charArr = name.split("").map((c) => charToNum(c));
  let minMove = charArr.length - 1;
  charArr.forEach((nowCursor, index) => {
    answer += nowCursor;

    let nextCursor = index + 1;

    while (nextCursor < charArr.length && charArr[nextCursor] === 0)
      nextCursor++;

    const toBack = charArr.length - nextCursor;

    minMove = Math.min(minMove, index * 2 + toBack, index + 2 * toBack);
  });
  return answer + minMove;
}
