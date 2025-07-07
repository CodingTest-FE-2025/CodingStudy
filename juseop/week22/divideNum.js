/**
 * 나누어 떨어지는 숫자 배열
 *
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수
 * divisor로 나누어 떨어지는 element가 없을 경우 -1을 반환
 *
 * 제한 사항
 * arr은 자연수를 담은 배열이다.
 * 정수 i,j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 이다.
 * divisor는 자연수이다.
 * array는 길이 1 이상인 배열이다.
 *
 * 입출력 예
 * arr = [5, 9, 7, 10], divisor = 5 return = [5, 10]
 * arr = [2, 36, 1, 3], divisor = 1 return = [1, 2, 3, 36]
 * arr = [3, 2, 6], divisor = 10 return = [-1]
 */

function solution(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0);
  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
