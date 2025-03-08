// https://school.programmers.co.kr/learn/courses/30/lessons/1845

/**
 *
 * 1. 베열의 길이를 2로 나눈다.
 * 2. Set을 이용하여 중복을 제거한다.
 * 3. 1번과 2번의 길이를 비ㄱ교하여 작은 값을 리턴한다.
 */

function solution(nums) {
  let a = nums.length / 2;
  let b = new Set();
  b = new Set(nums).size;
  return a > b ? b : a;
}

console.log(solution([3, 1, 2, 3]));
