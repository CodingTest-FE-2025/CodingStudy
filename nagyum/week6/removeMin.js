/**
 * 값을 찾는거라 filter 한번 사용해봄
 */

function solution(arr) {
  let min = Math.min(...arr);

  let result = arr.filter((num) => num !== min);

  return result.length > 0 ? result : [-1];
}
