/*
1. for문을 돌면서 끝말잇기 실패 or 중복 단어 체크 (i가 1인 이유는 첫번째 단어는 틀릴 수가 없기 때문)
2. before = 전 단어, now는 현재 인덱스의 단어 
3. 전 단어 마지막 인덱스와 현재 첫 인덱스를 비교, 다르다면 틀린거니까 x 변수에 해당 인덱스 i를 넣음
4. indexof를 통해 현재 단어가 이전에 나와있는지 체크함, 뒤에 있을 수도 있으니까 indexof(now)<i
5. x가 그대로 0이면 틀린게 없으니까 answer에 [0,0]
6. x가 값이 있다면 loser = 틀린 사람의 순번, turn = 몇번째에 틀렸는지 계산
*/

function solution(n, words) {
  let answer = [];
  let x = 0;

  for (let i = 1; i < words.length; i++) {
    let before = words[i - 1];
    let now = words[i];
    if (before[before.length - 1] !== now[0]) {
      x = i;
      break;
    }
    if (words.indexOf(now) < i) {
      x = i;
      break;
    }
  }
  if (x === 0) return (answer = [0, 0]);
  let loser = (x % n) + 1;
  let turn = Math.floor(x / n) + 1;

  return (answer = [loser, turn]);
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
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
