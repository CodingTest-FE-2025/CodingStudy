// https://school.programmers.co.kr/learn/courses/30/lessons/42747

/**
 * 생각한 방법
 *
 * 1. citations [3, 0, 6, 1, 5] 를 map 사용한다.
 * 2. 매개변수를 [3, 0, 6, 1, 5] 에 하나씩 비교하며 이상 인걸 몇개인지 찾아낸다.
 *    ex) 3보다 이상인게 3개 0보다 이상인게 5개 ... [3, 5, 1, 4, 2]
 * 3. citations와 비교해서 이상인걸 찾아내서 갯수를 구한다.
 *
 */

function solution(citations) {
  let ary = [...citations];
  let ary2 = citations.map((el) => {
    let a = 0;
    ary.forEach((el2) => {
      if (el <= el2) {
        a++;
      }
    });
    return a;
  });

  const count = ary.reduce((acc, cur, idx) => acc + (cur >= ary2[idx] ? 1 : 0), 0);
  return count;
}

console.log(solution([3, 0, 6, 1, 5]));

/**
 * 찾아본 내용
 *
 * 문제를 이해못해서 문제이해를 찾아봄
 */
