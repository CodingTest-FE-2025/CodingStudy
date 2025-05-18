// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const sizeMap = new Map();

  // 1. 귤 크기별 개수 세기
  for (let size of tangerine) {
    sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
  }

  // 2. 개수를 기준으로 내림차순 정렬
  const sorted = [...sizeMap.values()].sort((a, b) => b - a);

  // 3. 개수가 많은 크기부터 선택하여 k개 채우기
  let count = 0; // 종류 수
  for (let num of sorted) {
    k -= num;
    count++;
    if (k <= 0) break;
  }

  return count;
}
