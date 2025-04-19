/*
mock 데이터를 객체형태로 만들어놈.
Object.entries(mock) = 객체를 2차원 배열로 바꿔줌 ex) ['zero', 0], ['one', 1] ...
for문으로 0 ~ 9까지 돌면서 split을 통해 word기준으로 배열로 쪼개고 그 위치에 num을 이어넣음.
마지막으로 Number(s)로 숫자로 변환
*/

function solution(s) {
  let answer = 0;
  let mock = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  for (const [word, num] of Object.entries(mock)) {
    s = s.split(word).join(num);
  }
  return (answer = Number(s));
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); //234567
console.log(solution("123")); // 123
