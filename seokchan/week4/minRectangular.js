function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    let w = sizes[i][0]; // 가로 길이
    let h = sizes[i][1]; // 세로 길이
    if (w < h) {
      // 세로가 가로보다 더 실다면
      sizes[i][0] = h; // 가로 세로를 바꿈 (큰 값을 가로로)
      sizes[i][1] = w;
    }
  }

  let maxWidth = 0; // 가장 긴 가로 길이
  let maxHeight = 0; // 가장 긴 세로 길이

  // 모든 명함 중 가장 큰 가로와 세로 찾기
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > maxWidth) {
      // 현재 가로 길이가 기존 최대값보다 크면 업데이트
      maxWidth = sizes[i][0];
    }
    if (sizes[i][1] > maxHeight) {
      // 현재 세로 길이가 기존 최대값보다 크면 업데이트
      maxHeight = sizes[i][1];
    }
  }
  // 가장 큰 가로와 세로를 곱해서 지갑 크기 return
  return maxWidth * maxHeight;
}
