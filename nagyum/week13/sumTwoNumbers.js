/** 두개 뽑아서 더하기
 * 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더할 수 있는 모든 수
 * 일단 겹치면 안될것 같고
 * 그냥 이중 for 문 돌려서 겹치는거 제거하면 되는거 아닌가
 * numbers 안에 숫자들이 존재함
 *
 * 	O(n² log n) O(n²)
 */

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)];
  answer.sort((a, b) => a - b);
  return answer;
}
