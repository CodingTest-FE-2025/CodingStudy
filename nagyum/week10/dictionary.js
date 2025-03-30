/**
 * 모음사전
 * a,e,i,o,u 만을 사용해서 만들수있는 길이 5 이하의 사전
 * [a,aa, .... uuuuu ]
 * 단어가 주어졌을때 몇번째 단어인지 유추
 */
function solution(word) {
  let vowels = ["A", "E", "I", "O", "U"];
  let dictionary = [];

  const dfs = (cur, len) => {
    if (len > 5) return;

    dictionary.push(cur);

    for (let i = 0; i < vowels.length; i++) {
      dfs(cur + vowels[i], len + 1);
    }
  };

  dfs("", 0);

  return dictionary.indexOf(word);
}
