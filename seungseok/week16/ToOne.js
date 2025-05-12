// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
  let count = 0;
  for (let el of num_list) {
    while (el > 1) {
      if (el % 2 === 0) {
        el = el / 2;
      } else {
        el = (el - 1) / 2;
      }
      count++;
    }
  }
  return count;
}
