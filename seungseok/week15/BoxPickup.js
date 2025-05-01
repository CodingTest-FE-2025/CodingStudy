// https://school.programmers.co.kr/learn/courses/30/lessons/389478

/**

총 층 수(h)를 구한다.
- 한 층에 w개씩 놓이므로 h = Math.floor((n - 1) / w) + 1

num이 있는 층(layer)과 열(col)을 구한다.
- layer = Math.floor((num - 1) / w)
- 짝수층이면 왼→오: col = (num - 1) % w
- 홀수층이면 오→왼: col = w - 1 - ((num - 1) % w)

해당 열(col)에서 위에 있는 층들을 확인한다.
- 각 층마다 해당 col에 있는 상자 번호(idx)를 계산한다.
- 짝수층: idx = l * w + col + 1
- 홀수층: idx = (l + 1) * w - col

계산한 번호(idx)가 n보다 작거나 같으면 count++ 한다.
- 그게 실제 존재하는 상자이므로 꺼내야 하는 대상

count를 리턴한다.
- 꺼내야 하는 상자의 총 개수 (본인 포함)

 */

function solution(n, w, num) {
  const h = Math.floor((n - 1) / w) + 1; // 총 층 수
  const layer = Math.floor((num - 1) / w); // num의 층
  let col;

  if (layer % 2 === 0) {
    col = (num - 1) % w; // 왼→오
  } else {
    col = w - 1 - ((num - 1) % w); // 오→왼
  }

  let count = 0;
  for (let l = layer; l < h; l++) {
    let idx;
    if (l % 2 === 0) {
      idx = l * w + col + 1;
    } else {
      idx = (l + 1) * w - col;
    }

    if (idx <= n) count++;
  }

  return count;
}

console.log(solution(22, 6, 8)); // 출력: 3
