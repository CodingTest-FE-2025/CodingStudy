// https://school.programmers.co.kr/learn/courses/30/lessons/12935

/**
 * 1. arr을 다시 오름차순으로 정렬해서 arr[0] 값을 변수에 저장함
 * 2. 기존 arr에서 변수값을 filter 사용해 제거하고 다시 배열 리턴
 * 3. 빈 배열이면 -1 push
 */

function solution(arr) {
  var answer = [];

  const arr2 = [...arr].sort((a, b) => a - b);
  const num = arr2[0];

  answer = arr.filter((el) => el !== num);

  if (answer.length === 0) {
    answer = [-1];
  }

  return answer;
}

console.log(solution([10]));
