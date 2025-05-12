function solution(n, lost, reserve) {
  // 여벌 가져온 학생이 도난당한 경우 제외
  const realLost = lost.filter((l) => !reserve.includes(l));
  const realReserve = reserve.filter((r) => !lost.includes(r));

  // 정렬 필수
  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  let count = n - realLost.length;

  for (let i = 0; i < realLost.length; i++) {
    const lostStudent = realLost[i];
    const index = realReserve.findIndex((r) => Math.abs(r - lostStudent) === 1);
    if (index !== -1) {
      count++;
      realReserve.splice(index, 1); // 빌려줬으니 제거
    }
  }

  return count;
}
