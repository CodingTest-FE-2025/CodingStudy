/** 삼진법 뒤집기
 *  일단 주어진 자연수 n을 3진법으로 나누고
 * reverse를 써서 뒤집어서 배열에 넣고 10진법으로 뺴기
 * 3진법 -> n을 3을 나눈 나머지
 * Math.floor(n / 3) > 0) while 조건문에서 이렇게 하면 마지막 자릿수를 못 넣으니 그냥
 * n>0 이라는 조건으로 해야됨
 * O(logN) O(logN)
 */

function solution(n) {
  const array = [];
  let answer = 0;

  while (n > 0) {
    array.push(n % 3);
    n = Math.floor(n / 3);
  }
  for (let i = 0; i < array.length; i++) {
    answer += array[i] * Math.pow(3, array.length - 1 - i);
  }
  return answer;
}
