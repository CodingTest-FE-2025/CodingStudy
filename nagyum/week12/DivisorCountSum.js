/** 약수의 갯수와 덧셈
 *
 *
 *
 */

function solution(left, right) {
  var answer = 0;
  let length = right - left + 1;

  function compare(i) {
    let num = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) num++;
    }
    return num;
  }

  for (left; left <= right; left++) {
    if (compare(num) % 2 === 0) answer += left;
    else answer -= left;
  }
  return answer;
}
