// https://school.programmers.co.kr/learn/courses/30/lessons/81301

/**
 *
 * split('')로 나누기
 * map으로 각 문자에 대해서
 * 1. 숫자면 answer에 push
 * 2. 문자면 word에 zero ~ nine이 있는지 확인
 * 3. 없으면 word에 push
 * 4. 있으면 word에 push하고 answer에 push word비우기
 * 5. answer를 join('')로 합치기
 *
 */

function solution(s) {
  var answer = [];
  var word = [];

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (!isNaN(el)) {
      answer.push(el);
    } else {
      word.push(el);
      const wordStr = word.join("");
      if (wordStr === "zero") {
        answer.push(0);
        word = [];
      } else if (wordStr === "one") {
        answer.push(1);
        word = [];
      } else if (wordStr === "two") {
        answer.push(2);
        word = [];
      } else if (wordStr === "three") {
        answer.push(3);
        word = [];
      } else if (wordStr === "four") {
        answer.push(4);
        word = [];
      } else if (wordStr === "five") {
        answer.push(5);
        word = [];
      } else if (wordStr === "six") {
        answer.push(6);
        word = [];
      } else if (wordStr === "seven") {
        answer.push(7);
        word = [];
      } else if (wordStr === "eight") {
        answer.push(8);
        word = [];
      } else if (wordStr === "nine") {
        answer.push(9);
        word = [];
      }
    }
  }

  answer = answer.join("");

  return Number(answer);
}

console.log(solution("one4seveneight")); // 1478
