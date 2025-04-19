/**
 * 예산
 * 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget가 주어질 때,
 * 최대 몇개의 부서에 물품을 지원할 수 있는지 return하는 함수
 *
 * 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 한다.
 * * 1,000원 이하의 금액을 지원할 수는 없다.
 */

//d = [1,3,2,5,4], budget = 9 => result = 3
//d = [2,2,3,3], budget = 10 => result = 4
function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      answer++;
    } else break;
  }
  return answer;
}

//오름차순으로 정렬을 안해주니 예제는 통과했는데 제출했을 때 테스트 몇개 실패함
// 가장 적은 금액을 요청한 부서부터 지원해줘야 최대한 많은 부서를 지원할 수 있기 때문에 오름차순으로 정렬이 필요함.
