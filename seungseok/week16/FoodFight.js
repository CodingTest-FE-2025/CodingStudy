// https://school.programmers.co.kr/learn/courses/30/lessons/134240

/**
 * 음식 개수 반으로 줄이기
 * 왼쪽에 쓰고
 * 거꾸로 뒤집어서 오른쪽에도 쓰기
 * 중간에 0 넣기
 */

function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    const arr = Math.floor(food[i] / 2);
    answer += String(i).repeat(arr);
  }

  return answer + "0" + [...answer].reverse().join("");
}
