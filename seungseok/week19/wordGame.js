// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const used = new Set(); // 이미 사용한 단어를 저장
  let prev = words[0]; // 첫 단어를 미리 저장
  used.add(prev); // 첫 단어는 사용 처리

  for (let i = 1; i < words.length; i++) {
    const word = words[i]; // 현재 단어

    // 1. 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다르거나
    // 2. 이미 사용한 단어이거나
    // 3. 한 글자인 경우
    if (
      prev[prev.length - 1] !== word[0] ||
      used.has(word) ||
      word.length <= 1
    ) {
      const player = (i % n) + 1; // 사람 번호 (1부터 시작)
      const turn = Math.floor(i / n) + 1; // 몇 번째 차례인지
      return [player, turn];
    }

    used.add(word); // 사용한 단어에 추가
    prev = word; // 이전 단어 업데이트
  }

  return [0, 0]; // 탈락자가 없으면 [0, 0]
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3, 3]
