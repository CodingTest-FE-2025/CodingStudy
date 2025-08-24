function solution(babbling) {
  const speak = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let word of babbling) {
    let valid = true;

    // 1. 같은 발음을 연속으로 쓰면 불가능
    for (let s of speak) {
      if (word.includes(s.repeat(2))) {
        valid = false;
        break;
      }
    }

    if (!valid) continue;

    // 2. 가능한 발음을 모두 지워보기
    let temp = word;
    for (let s of speak) {
      temp = temp.split(s).join(" "); // 발음 부분을 공백으로 치환
    }

    // 3. 다 지우고 공백만 남았다면 성공
    if (temp.trim().length === 0) answer++;
  }

  return answer;
}
