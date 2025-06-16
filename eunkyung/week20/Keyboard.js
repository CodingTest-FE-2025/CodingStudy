function solution(keymap, targets) {
  const keyMapCount = {};

  keymap.forEach((keys) => {
    for (let i = 0; i < keys.length; i++) {
      const char = keys[i];
      const pressCount = i + 1;
      if (!keyMapCount[char] || keyMapCount[char] > pressCount) {
        keyMapCount[char] = pressCount;
      }
    }
  });

  const result = targets.map((target) => {
    let total = 0;
    for (const char of target) {
      if (!keyMapCount[char]) return -1;
      total += keyMapCount[char];
    }
    return total;
  });

  return result;
}
