// https://school.programmers.co.kr/learn/courses/30/lessons/84512

/**
 *
 * 생각한 방법
 * 1. dfs를 이용해 모든 조합을 구해 배열에 push한다.
 * 2. push할 때마다 길이를 체크해서 5글자 넘으면 리턴턴
 * 3. 배열에서 word가 몇 번째에 있는지 indexOf로 찾는다.
 */

function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];

  // 단어를 저장할 배열
  const words = [];

  // 모든 조합 구함
  function dfs(el) {
    // 5글자 넘으면 리턴 (AAAAA -> AAAAAA 이게 아니라 AAAA로 돌아가서 AAAAE 추가되도록)
    if (el.length > 5) return;

    // 현재 단어를 배열에 push
    words.push(el);

    // 문자를 하나씩 추가하고 dfs 실행행
    for (let i = 0; i < arr.length; i++) {
      dfs(el + arr[i]);
    }
  }

  // 빈값으로 시작
  dfs("");

  // 0부터 시작이지만 빈값으로 시작해서 ㄱㅊ
  return words.indexOf(word);
}

console.log(solution("I"));
