function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);
  //x: index값 0~number.length
  //value: 경우의 수의 합
  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2
