// https://school.programmers.co.kr/learn/courses/30/lessons/86491
/**
 * 생각한 방법
 * 1. [i][A, B] A와 B를 sort사용하여 내림차순으로 변경
 * 2. [i][0] 중 제일 큰 수와 [i][1] 중 제일 큰 수를 곱하기
 */

function solution(sizes) {
  var answer = 0;

  let arr = sizes.map((el) => {
    return el.sort((a, b) => b - a);
  });

  let a = 0;
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i][0] > a ? (a = arr[i][0]) : a;
    arr[i][1] > b ? (b = arr[i][1]) : b;
  }

  answer = a * b;

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
