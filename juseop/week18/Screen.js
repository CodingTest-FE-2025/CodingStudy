/**
 * 바탕화면 정리
 * 컴퓨터 바탕화면은 각 칸이 정사각형인 격자판이다.
 * 이때 컴퓨터 바탕화면의 상태를 나타낸 문자열 wallpaper가 주어집니다.
 * 파일들은 바탕화면의 격자칸에 위치하고 바탕화면의 격자점들은 바탕화면의 가장 왼쪽 위를 (0,0)으로 시작해
 * (세로 좌표, 가로 좌표)로 표현한다. 빈칸은 ".", 파일이 있는 칸은 "#"의 값을 가진다.
 * 드래그를 하면 파일들을 선택할 수 있고, 선택된 파일들을 삭제할 수 있다.
 * 머쓱이는 최소한의 이동거리를 갖는 한번의 드래그로 모든 파일을 선택해서 한번에 지우려고하며 드래그로 파일들을 선택하는 방법은 다음과 같다.
 * 드래그는 바탕화면의 격자점 S(lux, luy)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동이다.
 * 이때, "점 S에서 점 E로 드래그한다"고 표현하고 점 S와 점 E를 각각 드래그의 시작점, 끝점이라고 표현한다.
 * 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때, "드래그 한 거리"는 | rdx - lux | + | rdy - luy |로 정의한다.
 * 점 S에서 점 E로 드래그를 하면 바탕화면에서 두 격자점을 각각 왼쪽 위, 오른쪽 아래로 하는 직사각형 내부에 있는 모든 파일이 선택된다.
 */

function solution(wallpaper) {
  let [top, bottom, left, right] = [51, 0, 51, 0];

  for (let r = 0; r < wallpaper.length; r++) {
    for (let c = 0; c < wallpaper[0].length; c++) {
      if (wallpaper[r][c] === ".") continue;
      top = Math.min(top, r);
      bottom = Math.max(bottom, r);
      left = Math.min(left, c);
      right = Math.max(right, c);
    }
  }

  return [top, left, bottom + 1, right + 1];
}
