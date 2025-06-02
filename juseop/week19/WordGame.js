/**
 * 영어 끝말 잇기
 * 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 한다.
 * 끝말잇기는 다음과 같은 규칙으로 진행된다.
 * 1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말한다.
 * 2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작한다.
 * 3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
 * 4. 이미 등장했던 단어는 사용할 수 없다.
 * 5. 한 글자인 단어는 인정되지 않는다.
 * 다음은 3명의 사람이 끝말잇기를 하는 상황이다.
 * tank ->kick -> know -> wheel -> land -> dream -> mother -> robot -> tank
 * 위 끝말잇기는 다음과 같다.
 * 1번 사람이 자신의 첫 번째 단어인 "tank"를 말하고,
 * 2번 사람이 "kick"를 말하고,
 * 3번 사람이 "know"를 말한다.
 * 1번 사람이 자신의 두 번째 차례에 wheel을 말한다.
 * 끝말잇기를 계속 진행하다 보면 3번 사람이 자신의 세 번째 차례에 말한 tank라는 단어는 이전에 등장한 단어이므로 탈락.
 * 사람의 수 n과 사람들이 순서대로 말한 단어 words가 주어 질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇번째 차례에 탈락하는지를 구해서 return
 *
 * 제한사항
 * 사람의 수 n은 2 이상 10 이하의 자연수
 * words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열, 길이는 n이상 100이하.
 * 단어의 길이는 2이상 50이하
 * 모든 단어는 알파벳 소문자로 이루어짐.
 * 끝말잇기에 사용되는 단어의 뜻은 신경쓰지 않아도 된다.
 * 정답은 [번호, 차례] 형태로 return
 * 주어진 단어들로 탈락자가 생기지 않는다면 [0,0]을 return
 *
 * 입출력예
 * n = 3, words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"] => [3,3]
 * n = 5, words = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"] => [0,0]
 * n = 2, words = ["hello", "one", "even", "never", "now", "world", "draw"] => [1,3]
 *
 */
function solution(n, words) {
  const usedWords = new Set();
  let lastChar = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const player = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    if ((i === 0 || lastChar === word[0]) && !usedWords.has(word)) {
      usedWords.add(word);
      lastChar = word[word.length - 1];
    } else {
      return [player, turn];
    }
  }

  return [0, 0];
}
