function solution(numbers) {
  function solution(numbers) {
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
      let result = -1;
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] > numbers[i]) {
          result = numbers[j];
          break;
        }
      }
      answer.push(result);
    }

    return answer;
  }
}

function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    const current = numbers[i];

    while (stack.length && numbers[stack[stack.length - 1]] <= current) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = numbers[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result;
}
