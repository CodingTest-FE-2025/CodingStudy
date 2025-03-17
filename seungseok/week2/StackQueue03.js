// https://school.programmers.co.kr/learn/courses/30/lessons/12909

/**
 * 생각한 방법
 *
 * 1. 빈배열 arr 생성
 * 2. s를 for of 쓰면서 push pop 짝이 맞으면 삭제.
 * 3. 비어있을때 ) 으로 시작하면 false
 * 3. 최종 비어있으면 true 아니면 false
 */

function solution(s) {
  let arr = [];
  for (let key of s) {
    if (arr.length === 0 && key === ")") {
      return false;
    }
    if (key === "(") {
      arr.push(key);
    } else {
      arr.pop();
    }
  }
  return arr.length === 0 ? true : false;
}

console.log(solution("()"));
