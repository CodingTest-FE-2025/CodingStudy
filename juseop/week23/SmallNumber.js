/**
 * 제일 작은 수 제거하기
 *
 * 정수를 저장한 배열 arr에서 가장 작은 수를 제거하는 배열을 리턴하는 함수, solution을 완성
 * 단, 리턴하려는 배열이 빈 배열인 경우에은 배열에 -1을 채워 리턴
 * 예를 들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴하고,[10]이면 [-1]을 리턴
 *
 * 제한 조건
 * arr은 길이 1 이상인 배열
 * 인덱스 i, j에 대해 i != j이면 arr[i] != arr[j]이다.
 *
 * 입출력 예
 * arr = [4,3,2,1], result = [4,3,2]
 * arr = [10], result = [-1]
 */

function solution(arr) {
  answer = [];
  let min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);

  if (arr.length <= 1) {
    answer = [-1];
  } else {
    answer = arr;
  }
  return answer;
}
