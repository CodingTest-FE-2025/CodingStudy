/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

function solution(arr) {
  var answer = [];
  let min = Math.min(...arr); // 배열의 최솟값
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      // 배열의 최솟값을 제외한 숫자는 aswer에 push
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    // 배열에 아무것도 없다면 -1을 push
    answer.push(-1);
  }
  return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
