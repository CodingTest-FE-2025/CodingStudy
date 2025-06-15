/**
 * 카드 뭉치
 * 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 손서의 단어 배열을 만들고 싶다.
 * 원하는 카드 뭉치에서 카드를 순서대로 한장씩 사용한다.
 * 한번 사용한 카드는 다시 사용할 수 없다.
 * 카드를 사용하지 않고 다음 카드로 넘어갈 수 없다.
 * 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없다.
 *
 * 첫번째 카드 뭉치["i", "drink", "water"], 두번째 카드 뭉치 ["want", "to"]가 적혀 있을 때,
 * ["i", "wnat", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면,
 * 첫 번째 카드 뭉치에서 "i"를 사용하고, 두번째 카드뭉치에서 "want"와 "to"를 사용하고,
 * 첫 번째 카드 뭉치에 "drink"와 "water"를 사용하면 된다.
 * 문자열로 이루어진 배열 cards1과 cards2와 원하는 단어 배열 goal이 주어질 때,
 * cards1과 cards2에서 원하는 단어 배열 goal을 만들 수 있다면 "yes"를 만들 수 없다면 "no"를 return
 *
 * 제한 사항
 * 1 <= cards1.length, cards2.length <= 10
 * * 1 <= cards1[i].length, cards2[i].length <= 10
 * * cards1과 cards2에는 서로 다른 단어만 존재한다.
 * 2 <= goal.length <= cards1.length + cards2.length
 * * 1<= goal[i].length <= 10
 * * goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있다.
 * card1과 cards2의 원소는 모두 소문자로 이루어져 있다.
 *
 * 입출력예
 * cards1 = ["i", "water", "drink"], cards2 = ["want", "to"], goal = ["i", "want", "to", "drink", "water"] => "No"
 */

function solution(cards1, cards2, goal) {
  let answer = "";
  let i = 0,
    j = 0;
  for (let k = 0; k < goal.length; k++) {
    if (i < cards1.length && goal[k] === cards1[i]) {
      i++;
    } else if (j < cards2.length && goal[k] === cards2[j]) {
      j++;
    } else {
      answer = "No";
      break;
    }
    answer = "Yes";
  }
  return answer;
}
