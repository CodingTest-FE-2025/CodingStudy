// https://school.programmers.co.kr/learn/courses/30/lessons/77884

/*

left 부터 right까지 for문
for문안에서 또 for문 으로 약수구하기
약수의 개수가 홀수면 answer에 i 빼기
약수의 개수가 짝수면 answer에 i 더하기

*/

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let num = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) num++;
    }

    if (num % 2 === 0) {
      answer = answer + i;
    } else {
      answer = answer - i;
    }
  }

  return answer;
}

/*

제곱근이 정수면 약수의 개수가 홀수다.

라는 사실을 이용해서 시간복잡도 줄일 수 있음.

Math.sqrt(i) -> 제곱근 구하기
Number.isInteger(...) -> 정수인지 확인

 */

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
