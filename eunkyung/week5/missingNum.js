function solution(numbers) {
  let answer = 0;
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  list.map((value) => {
    if (numbers.indexOf(value) === -1) {
      answer = answer + value;
    }
  });

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //14
