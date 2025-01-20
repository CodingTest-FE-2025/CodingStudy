/*
같은 숫자는 싫어
배열이 주어지고, 각 원소는 0~9 숫자로 이뤄짐. 
연속적으로 나타나는 숫자는 하나만 남기고 전부 제거, 반환할때 순서는 유지

sol1. 배열의 요소를 그 다음 요소들과 비교                    

*/

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] ) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
