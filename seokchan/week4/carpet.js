function solution(brown, yellow) {
  const total = brown + yellow; // 전체 격자 수

  for (let height = 3; height <= total; height++) {
    const width = total / height;

    if (total % height === 0 && width >= height) {
      // 노란색 격자 수가 맞는지 확인
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height]; // 가로, 세로 순서로 반환
      }
    }
  }
}
