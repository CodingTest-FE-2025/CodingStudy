/* *
 * 최소직사각형
 * size = > w,h 2차원 배열
 * sol)
 * w,h랑 비교해서 큰수가 앞에 오도록 하고
 * [0]중에 제일 큰 숫자
 * [1]중에 제일 큰 숫자
 * 곱하기
 *
 */

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([width, height]) => {
    const [small, large] = [width, height].sort((a, b) => a - b);
    maxWidth = Math.max(maxWidth, large);
    maxHeight = Math.max(maxHeight, small);
  });

  return maxWidth * maxHeight;
}
