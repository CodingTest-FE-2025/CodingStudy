// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
// 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

/**
 *
 * 1~n 까지 합을 구하는 반복문 n이 넘어가면 break
 * 2~n 까지 합을 구하는 반복문 n이 넘어가면 break
 * 딱 n 이 되는 경우 answer ++
 */

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}

console.log(solution(15)); // 4
