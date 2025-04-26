// https://school.programmers.co.kr/learn/courses/30/lessons/17681

/**
 *
 * 방법
 *
 */

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const map1 = arr1[i].toString(2).padStart(n, "0"); // 지도1 이진수
    const map2 = arr2[i].toString(2).padStart(n, "0"); // 지도2 이진수
    let line = "";

    for (let j = 0; j < n; j++) {
      if (map1[j] === "1" || map2[j] === "1") {
        line += "#"; // 하나라도 1이면 벽
      } else {
        line += " "; // 둘 다 0이면 공백
      }
    }

    answer.push(line);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
