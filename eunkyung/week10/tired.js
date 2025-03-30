function solution(k, dungeons) {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(false); //방문며부 체크

  function DFS(k, count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = true; //방문처리
        DFS(k - dungeons[i][1], count + 1); //피로도 감소, 방문 카운트 증가
        visited[i] = false; //원상복구
      }
    }
    answer = Math.max(answer, count);
  }
  DFS(k, 0);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); //3
