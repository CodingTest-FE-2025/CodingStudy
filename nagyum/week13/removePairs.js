/** 숫자 문자열과 영단어
 * 일단 영단어를 2차원 배열로 선언해주기 ( numbers )
 * 그리고 주어진 문자열에 문자가 나타나면 거기서 부터 이제 비교하면 될것같은데
 */
function solution(s) {
  let answer = s;
  let numbers = {
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

  for (let word in numbers) {
    let regExp = new RegExp(word, "g");
    answer = answer.replace(regExp, numbers[word]);
  }

  return parseInt(answer);
}
