// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  // 가장 위, 왼쪽 위치를 찾기 위한 초기값 (무한대로 설정하면 더 작은 값이 오면 무조건 갱신됨)
  let minRow = Infinity;
  let minCol = Infinity;
  // 가장 아래, 오른쪽 위치를 찾기 위한 초기값 (더 큰 값이 오면 갱신되도록 -1부터 시작)
  let maxRow = -1;
  let maxCol = -1;

  // 바탕화면의 각 행을 순회
  for (let i = 0; i < wallpaper.length; i++) {
    // 각 열을 순회
    for (let j = 0; j < wallpaper[i].length; j++) {
      // 파일이 있는 칸이라면
      if (wallpaper[i][j] === "#") {
        // 현재 위치가 더 위쪽이면 minRow 갱신
        if (i < minRow) minRow = i;
        // 현재 위치가 더 왼쪽이면 minCol 갱신
        if (j < minCol) minCol = j;
        // 드래그 끝점은 포함되지 않으므로 아래쪽 경계는 i+1
        if (i + 1 > maxRow) maxRow = i + 1;
        // 오른쪽 경계도 j+1
        if (j + 1 > maxCol) maxCol = j + 1;
      }
    }
  }

  // [시작 행, 시작 열, 끝 행, 끝 열] 반환
  return [minRow, minCol, maxRow, maxCol];
}
