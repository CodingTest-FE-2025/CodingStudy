function solution(arr, divisor) {
  var answer = [];
  arr.forEach((value) => {
    if (value % divisor === 0) {
      answer.push(value);
    }
  });

  answer.sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
