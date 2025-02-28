// https://school.programmers.co.kr/learn/courses/30/lessons/42576

/**
 * 1. 동명이인을 체크하기 위해 참가자의 Map을 만든다.
 * 2. 참가자 배열을 forEach를 사용해 1번에서 만든 Map에 참가자의 이름의 value가 없으면 1대입하고(기본값) 있으면(동명이인 발생) 1을 더한다.
 * 3. 2번과 같은 방식으로 1번에서 만든 Map에 완주자 이름이 나올때 마다 value에 1을 빼준다.
 * 4. Map을 돌며 value가 1인 참가자를 리턴한다.
 */

function solution(a, b) {
  let answer = "";
  let aMap = new Map();

  a.forEach((el) => {
    aMap.set(el, aMap.get(el) === undefined ? 1 : aMap.get(el) + 1);
  });

  b.forEach((el) => {
    aMap.set(el, aMap.get(el) - 1);
  });

  aMap.forEach((v, k) => {
    if (v > 0) {
      answer = k;
    }
  });

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
