/**
 * 실패율(카카오)
 * 실패율을 구하는 코드를 구하라.
 * 실패율은 다음과 같이 정의한다.
 * 스테이지에 도달했으나 아직 클리어 하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
 * 실패율이 높은  스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return.
 *
 * 제한사항
 * 스테이지의 개수 N은 1 이상 500 이하의 자연수
 * stages의 길이는 1 이상 200,000 이하의 자연수
 * stages의 각 원소는 1 이상 N + 1 이하의 자연수
 * 각 자연수는 사용자가 현재 도전중인 스테이지 번호를 나타냄.
 * 단 N + 1은 마지막 스테이지까지 클리어한 사용자를 나타냄.
 * 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
 * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의한다.
 *
 * 입출력 예
 * N = 5, stages = [2,1,2,6,2,4,3,3] result = [3,4,2,1,5]
 * N = 4, stages = [4,4,4,4,4] result = [4,1,2,3]
 */

function solution(N, stages) {
  let answer = [];
  let result = [];
  let stage = new Array(N + 2).fill(0);
  let user = stages.length;

  for (let i = 0; i < stages.length; i++) {
    stage[stages[i]]++;
  }

  for (let i = 1; i <= N; i++) {
    if (user === 0) {
      result.push([i, 0]);
    } else {
      result.push([i, stage[i] / user]);
      user -= stage[i];
    }
  }

  result.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < result.length; i++) {
    answer.push(result[i][0]);
  }

  return answer;
}
