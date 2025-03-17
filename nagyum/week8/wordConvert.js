function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // target이 없으면 변환 불가

  const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]
  const visited = new Set();
  visited.add(begin);

  while (queue.length) {
    const [current, count] = queue.shift();

    // 목표 단어 도달 시 횟수 반환
    if (current === target) return count;

    for (const word of words) {
      if (!visited.has(word) && isConvertible(current, word)) {
        queue.push([word, count + 1]);
        visited.add(word);
      }
    }
  }

  return 0; // 변환 불가능한 경우
}

// 현재 단어와 다음 단어가 한 글자만 다른지 판별
function isConvertible(word1, word2) {
  let diffCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diffCount++;
    if (diffCount > 1) return false; // 두 글자 이상 다르면 변환 불가능
  }

  return diffCount === 1;
}
