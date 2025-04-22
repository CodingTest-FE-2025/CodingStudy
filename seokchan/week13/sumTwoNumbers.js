/*
머리속에서 이중for문을 사용하지 말하야지하면서 손은 이미 이중for문을 만들고 있음.
sum = new Set() = 객체 형태로 중복된 요소를 제거해줌.
answer = [...sum].sort((a, b) => a - b) = 객체형태로 되어있는 sum을 배열로 변환해주고 오름차순으로 정리
*/

function solution(numbers) {
  let answer = [];
  let sum = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum.add(numbers[i] + numbers[j]);
    }
  }
  return (answer = [...sum].sort((a, b) => a - b));
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
