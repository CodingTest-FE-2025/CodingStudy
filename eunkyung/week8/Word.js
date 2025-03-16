function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가

  const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]

  while (queue.length > 0) {
    const [current, count] = queue.shift(); //현재 탐색할 단어 꺼냄

    if (current === target) return count; // 목표 단어 도달 시 변환 횟수 반환

    words = words.filter((word) => {
      if (isOneLetterDiff(current, word)) {
        queue.push([word, count + 1]); // 한 글자 차이이면 큐에 추가
        return false; // 사용한 단어 제거
      }
      return true;
    });
  }

  return 0; // 변환 불가능한 경우
}

// 두 단어가 한 글자만 다른지 확인하는 함수
function isOneLetterDiff(word1, word2) {
  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diff++;
    if (diff > 1) return false;
  }
  return diff === 1;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); //4
