// https://school.programmers.co.kr/learn/courses/30/lessons/154540

/**
 * 메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보고 있습니다.
 * 지도에는 바다와 무인도들에 대한 정보가 표시돼 있습니다.
 * 지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태이며,
 * 격자의 각 칸에는 'X' 또는 1에서 9 사이의 자연수가 적혀있습니다.
 * 지도의 'X'는 바다를 나타내며, 숫자는 무인도를 나타냅니다.
 * 이때, 상, 하, 좌, 우로 연결되는 땅들은 하나의 무인도를 이룹니다.
 * 지도의 각 칸에 적힌 숫자는 식량을 나타내는데,
 * 상, 하, 좌, 우로 연결되는 칸에 적힌 숫자를 모두 합한 값은
 * 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타냅니다.
 * 어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서
 * 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 합니다.
 * 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때,
 * 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아
 * return 하는 solution 함수를 완성해주세요.
 * 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return 해주세요.
 */

function solution(maps) {
  // 지도 크기
  const n = maps.length;
  const m = maps[0].length;

  // 방문 여부를 체크하기 위한 배열을 새로 생성
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // 답 배열
  const answer = [];

  // 상하좌우 이동 배열 (자주 사용하는 패턴! 외워두면 좋음)
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // 지도를 반복하며 방문하지 않은 땅이면 탐색 시작
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // X가 아니고 방문하지 않은 땅이면
      if (!visited[i][j] && maps[i][j] !== "X") {
        // BFS 탐색 시작 queue에 현재 위치를 넣고 방문 체크
        let queue = [[i, j]];

        // 방문 체크
        visited[i][j] = true;

        // 현재 땅의 숫자를 더하기 위한 변수
        let sum = Number(maps[i][j]);

        // queue가 빌 때까지 반복
        while (queue.length) {
          // queue에서 하나를 꺼냄
          const [x, y] = queue.shift();

          // 상하좌우 탐색 (자주 사용하는 패턴! 외워두면 좋음)
          for (let d = 0; d < 4; d++) {
            // 다음 위치 변수
            const nx = x + dx[d];
            const ny = y + dy[d];

            // 다음 위치가 지도 내에 있고 방문하지 않은 땅이면
            if (
              nx >= 0 &&
              nx < n &&
              ny >= 0 &&
              ny < m &&
              !visited[nx][ny] &&
              maps[nx][ny] !== "X"
            ) {
              // 방문 체크, 숫자 더하기, queue에 다음 위치 추가
              visited[nx][ny] = true;
              sum += Number(maps[nx][ny]);
              queue.push([nx, ny]);
            }
          }
        }

        // 답 배열에 현재 sum을 추가
        answer.push(sum);
      }
    }
  }

  // 답 배열이 비어있으면 -1을 리턴 아니면 오름차순 정렬 후 리턴
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution(["X23", "21X", "3X3"]));
