/*
가장 큰 수

0 또는 양의 정수가 주어졌을 때 정수를 이어 만들 수 있는 가장 큰 수 

길이 1~100000
원소 0~1000

문자열로 바꿔서 return 해라

sol (내 생각)
1. 숫자로 만들 수 있는 모든 경우의 수를 생각하고 
2. max를 사용해서 최대값 찾기
- 모든 경우의 수를 생각할려면 시간복잡도가 너무 크지 않을까

sol 2.
1. 숫자를 문자열로 변경하고
2. sort 를 사용해서 (x+y) (y+x)를 비교
3. 비교된 정렬 합치기
*/

// function solution(numbers) {
//   var answer = "";
//   const numbers = numbers.toString();
//   numbers.sort((a, b) => "a+b" > "b+a");

//   return answer;
// }

function solution(numbers) {
  numbers.sort((a, b) => ("" + b + a).localeCompare("" + a + b));
  const result = numbers.join("");
  return result[0] === "0" ? "0" : result; // 모든 값이 0인 경우 "0" 반환
}
