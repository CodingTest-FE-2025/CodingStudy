/**
 * 뒤에 있는 큰 수 찾기
 * 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 한다.
 * 정수 배열 numbers가 주어질 떄, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열 을 return.
 *
 * 제한 사항
 * - 4 <= numbers의 길이 <= 1,000,000
 * -- 1<= numbers[i] <= 1,000,000
 */

function solution(numbers) {
  const stack = [];
  const answer = new Array(numbers.length).fill(-1); // 초기값 -1로 설정

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const index = stack.pop();
      answer[index] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}
