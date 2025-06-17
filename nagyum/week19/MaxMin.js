function solution(s) {
  const arr = s.split(" ").map(Number); // 숫자 배열로 변환
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return `${min} ${max}`;
}

// sort로 했었는데 소트는 사전적으로 정렬이라 음수에서 오류가 뜸~~
