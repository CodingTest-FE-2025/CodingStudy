// https://school.programmers.co.kr/learn/courses/30/lessons/12906

/**
 * 생각한 방법
 *
 * 1. arr을 reduce 사용 초기값은 -1 로 0-9 와 완전 다르게 설정
 * 2. 이전값과 현재값이 다르면 배열에 push
 * 3. 배열 리턴
 */

function solution(arr) {
  return arr.reduce((acc, cur, idx) => {
    if (acc[acc.length - 1] !== cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

/**
 * 찾아본 내용
 *
 * 쉽게 idx값을 사용하려 했지만,
 * 현재배열의 길이와 누적된배열의 길이가 차이가 있어서
 * acc[acc.length - 1]로 누적된 배열의 마지막요소를 찾는다.
 *
 */

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
