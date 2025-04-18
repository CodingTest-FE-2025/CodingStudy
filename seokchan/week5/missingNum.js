/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/

/* 
0~9의 총합은 45
45 - numbers = 없는 숫자의 총합
*/

function solution(numbers) {
  var answer = 0;
  let Num = 0;
  for (let i = 0; i < numbers.length; i++) {
    Num += numbers[i];
  }
  return (answer = 45 - Num);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
