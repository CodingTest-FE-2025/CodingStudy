function solution(wallpaper) {
  let answer = [];
  let minY = Infinity;
  let minX = Infinity;
  let maxY = -1;
  let maxX = -1;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        minY = Math.min(minY, i);
        minX = Math.min(minX, j);
        maxY = Math.max(maxY, i);
        maxX = Math.max(maxX, j);
      }
    }
  }

  return (answer = [minY, minX, maxY + 1, maxX + 1]);
}

console.log(solution([".#...", "..#..", "...#."]));
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);
console.log(solution(["..", "#."]));
