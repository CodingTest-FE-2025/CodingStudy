// https://school.programmers.co.kr/learn/courses/30/lessons/70129

/**
 *
 * answer = [0,0]으로 초기화
 *
 * s를 while 반복
 * s가 1이면 answer 리턴
 *
 * s가 1이 아니면 answer[0]에 1 더하기
 * s의 0의 개수를 구해서 answer[1]에 더하기
 * s에서 0을 제거함
 * s의 길이를 구하고 2진법으로 변환해서 s에 넣기
 *
 *
 */

function solution(s) {
  var answer = [0, 0];

  while (s !== "1") {
    answer[0] += 1;
    const zeroCount = s.split("").filter((el) => el === "0").length;
    answer[1] += zeroCount;
    s = s
      .split("")
      .filter((el) => el !== "0")
      .length.toString(2);
  }

  return answer;
}

console.log(solution("110010101001"));
