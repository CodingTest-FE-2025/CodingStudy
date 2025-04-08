/**
 * 팩토리얼
 * i팩토리얼은 (i!)은 1부터 i까지의 정수의 곱을 의미한다.
 * 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return하도록 함수 완성.
 *
 *
 * 10! = 3628800
 * 3! = 6
 */

function solution(n) {
  let answer = 0;
  let factorial = 1;
  for (let i = 1; i <= 10; i++) {
    factorial *= i;
    if (factorial <= n) {
      answer = i;
    }
  }
  return answer;
}

//1. i를 1부터 10까지 증가시키면서 i!계산
//2. factoraial *= i 누적곱을 이용해 i!계산
//3. factorial이 n보다 작거나 같으면 answer에 i 저장
//4. factorial이 n보다 커지면 반복문 종료
