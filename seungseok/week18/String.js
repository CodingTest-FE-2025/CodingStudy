// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  const arr = s.split("");
  arr.sort(function (a, b) {
    return b.localeCompare(a);
  });
  const result = arr.join("");
  return result;
}

// 1. 문자열을 하나씩 잘라서 배열로 만든다.
// 2. 정렬할 때 localeCompare를 써서 알파벳 순서를 정확히 비교한다.
// 3. b - a가 아니라 b.localeCompare(a)를 써야 대소문자 기준도 정확하게 정렬된다.
// 4. 정렬된 배열을 다시 붙여서 문자열로 만든다.
