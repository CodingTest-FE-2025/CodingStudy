// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result.push(Math.max(row, col) + 1);
  }

  return result;
}

// 1. n × n 배열을 만들면 메모리 너무 많이 써서 안 됨.
// 2. 근데 규칙이 있어서 굳이 전체 만들 필요가 없음.
// 3. (i, j) 위치의 값은 항상 Math.max(i, j) + 1임.
// 4. 1차원 인덱스를 2차원으로 바꾸면 (i / n, i % n)임.
// 5. 그 위치 값만 구해서 배열에 넣으면 됨.
// 6. left부터 right까지만 반복하면서 필요한 값만 뽑음.
// 7. 그 배열 그대로 리턴하면 끝.
