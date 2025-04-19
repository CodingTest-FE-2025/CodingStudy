// https://school.programmers.co.kr/learn/courses/30/lessons/70128

/*

a의 길이 n

0부터 n-1끼지 a[i] * b[i]를 더한 값을 리턴

*/

function solution(a, b) {
  var answer = 0;
  let n = a.length;

  for (let i = 0; i < n; i++) {
    answer = answer + a[i] * b[i];
  }

  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
