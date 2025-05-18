// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  var answer = 0;

  for (let i = 1; i < k; i++) {
    answer = (answer + 2) % numbers.length;
  }

  return numbers[answer];
}
