function solution(numbers) {
  const stack = [];
  const answer = Array(numbers.length).fill(-1); // -1로 되어있는 배열 생성

  for (let i = numbers.length - 1; i >= 0; i--) {
    // 기존 사용하는 것과 달리 반대로 for문을 돌림(뒤에 있는 숫자 중 큰 수를 찾기 위해)
    // 스택에서 현재 값보다 작거나 같은 값은 제거
    while (stack.length && stack[stack.length - 1] <= numbers[i]) {
      stack.pop();
    }

    // 스택에 남아있는 값이 있다면 그게 뒷머시기
    if (stack.length) {
      answer[i] = stack[stack.length - 1];
    }

    // 현재 숫자를 스택에 추가
    stack.push(numbers[i]);
  }

  return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
