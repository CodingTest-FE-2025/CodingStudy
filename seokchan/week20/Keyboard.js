function solution(keymap, targets) {
  let answer = 0;
  const pressMap = {};

  // 모든 keymap을 순회하면서 문자별 최소 누름 횟수 저장
  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const keyType = key[i]; // 현재 문자
      const press = i + 1;
      // 이미 저장된 값보다 작을 경우만 갱신
      if (!pressMap[keyType] || press < pressMap[keyType]) {
        pressMap[keyType] = press;
      }
    }
  }
  // 각 target 문자열을 순회하며 필요한 누름 수 계산
  return targets.map((target) => {
    let total = 0;
    for (const keyType of target) {
      if (!pressMap[keyType]) return -1; // 입력 불가능한 문자면 -1 리턴
      total += pressMap[keyType];
    }
    return (answer = total);
  });
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9,4]
