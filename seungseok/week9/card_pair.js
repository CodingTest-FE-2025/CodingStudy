// https://school.programmers.co.kr/learn/courses/30/lessons/72415

function solution(board, r, c) {
  const drc = [
    [1, 0], // 아래
    [-1, 0], // 위
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
  ];

  // 방향키로 이동할 때 최소 거리 계산 (일반 + Ctrl 이동 포함)
  const bfs = (sr, sc, tr, tc, board) => {
    const visited = Array.from({ length: 4 }, () => Array(4).fill(false));
    const queue = [[sr, sc, 0]];
    visited[sr][sc] = true;

    while (queue.length) {
      const [cr, cc, cnt] = queue.shift();

      // 목표 위치에 도착하면 거리 리턴
      if (cr === tr && cc === tc) return cnt;

      for (let [dr, dc] of drc) {
        // 일반 이동 (한 칸)
        let nr = cr + dr;
        let nc = cc + dc;
        if (0 <= nr && nr < 4 && 0 <= nc && nc < 4 && !visited[nr][nc]) {
          visited[nr][nc] = true;
          queue.push([nr, nc, cnt + 1]);
        }

        // Ctrl 이동 (해당 방향으로 카드나 벽까지 직진)
        [nr, nc] = [cr, cc];
        while (true) {
          const tr = nr + dr;
          const tc = nc + dc;
          if (tr < 0 || tr >= 4 || tc < 0 || tc >= 4) break; // 벽에 닿으면 멈춤
          nr = tr;
          nc = tc;
          if (board[nr][nc] !== 0) break; // 카드에 닿으면 멈춤
        }

        if (!visited[nr][nc]) {
          visited[nr][nc] = true;
          queue.push([nr, nc, cnt + 1]);
        }
      }
    }
  };

  // 모든 카드 종류 수집 (중복 제거)
  const cards = new Set();
  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 4; ++j) {
      if (board[i][j] !== 0) cards.add(board[i][j]);
    }
  }

  const cardList = [...cards];

  let minCount = Infinity;

  // 카드 순서를 정해 순열을 만든다 (모든 경우 탐색)
  const permutate = (arr, l, r) => {
    if (l === r) {
      solve([...arr]);
      return;
    }
    for (let i = l; i <= r; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]];
      permutate(arr, l + 1, r);
      [arr[l], arr[i]] = [arr[i], arr[l]];
    }
  };

  // 실제 카드 짝 맞추기 실행
  const solve = (orders) => {
    const copyBoard = board.map((row) => [...row]);
    let cr = r,
      cc = c;
    let total = 0;

    for (let num of orders) {
      let positions = [];

      // 현재 보드에서 해당 카드 번호의 위치 2개 찾기
      for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
          if (copyBoard[i][j] === num) {
            positions.push([i, j]);
          }
        }
      }

      const [first, second] = positions;

      // 두 가지 순서 모두 계산해서 더 적은 쪽을 선택
      // 순서 1: first → second
      let toFirst = bfs(cr, cc, first[0], first[1], copyBoard);
      let toSecond = bfs(first[0], first[1], second[0], second[1], copyBoard);
      let count1 = toFirst + toSecond + 2; // 엔터키 2번 포함

      // 순서 2: second → first
      let toSecond2 = bfs(cr, cc, second[0], second[1], copyBoard);
      let toFirst2 = bfs(second[0], second[1], first[0], first[1], copyBoard);
      let count2 = toSecond2 + toFirst2 + 2;

      if (count1 <= count2) {
        total += count1;
        cr = second[0];
        cc = second[1];
      } else {
        total += count2;
        cr = first[0];
        cc = first[1];
      }

      // 짝 맞춘 카드 삭제
      copyBoard[first[0]][first[1]] = 0;
      copyBoard[second[0]][second[1]] = 0;
    }

    // 최소 이동 횟수 갱신
    minCount = Math.min(minCount, total);
  };

  // 카드 짝 맞추는 순서 모든 경우 탐색
  permutate(cardList, 0, cardList.length - 1);

  return minCount;
}

console.log(
  solution(
    [
      [1, 0, 0, 3],
      [2, 0, 0, 0],
      [0, 0, 0, 2],
      [3, 0, 1, 0],
    ],
    1,
    0
  )
); // 14
