// https://school.programmers.co.kr/learn/courses/30/lessons/12982

/*

- d를 오름차순으로 정렬
- d의 길이만큼 for문을 돌면서 budget에서 d[i]를 빼기
- budget이 0보다 작으면 break
- budget이 0보다 크면 answer에 1 더하기

*/

function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];

    if (budget < 0) {
      break;
    }

    answer++;
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
