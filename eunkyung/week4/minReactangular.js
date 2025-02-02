function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let [w, h] of sizes) {
    //가로가 항상 더 큰 값이 되도록 정렬
    //w가 h보다 작다면 둘을 바꿔준다.
    if (w < h) [w, h] = [h, w];

    maxWidth = Math.max(maxWidth, w);
    maxHeight = Math.max(maxHeight, h);
  }

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
