/** 예산
 * 내림차순으로 정렬 해서 앞부터 더해가다가 예산을 초과하면 while문 끝남
 * 처음에는 while 문 조건으로
 * total < budget 만 줫었는데 그렇게 하니까 실패케이스가 나옴
 * d 배열이 비어있을 때도 이 줄이 실행되면 d.shift()는 undefined를 반환합니다.

그러면 total += undefined → total이 NaN이 되고, 비교가 제대로 안 되면서 무한 루프 또는 틀린 값이 나와요.


 */

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  let total = 0;

  while (d.length && total + d[0] <= budget) {
    total += d.shift();
    answer++;
  }

  return answer;
}
