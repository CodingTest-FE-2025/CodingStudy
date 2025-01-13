/*
H-index

n편 중 h번 이상 인용된 논문이 h편 이상이고,
나머지 논문이 h번 이하면
h의 최댓값이 H-index

 citations.length=논문의 갯


 for문을 인용수의 최대값까지 돌고
 그중에 숫자가 맞는걸 찾아야되나..?
*/

function solution(citations) {
  // 1. 내림차순 정렬
  citations.sort((a, b) => b - a);

  // 2. h-index 계산
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i + 1 <= citations[i]) {
      h = i + 1; // 현재 인덱스 + 1이 h-index 후보
    } else {
      break; // h-index 조건을 만족하지 않으면 종료
    }
  }
  return h;
}
