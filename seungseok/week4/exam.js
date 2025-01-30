// https://school.programmers.co.kr/learn/courses/30/lessons/42840

/**
 * 생각한 방법
 * 1. 문제 갯수만큼 1번 답, 2번 답, 3번 답의 배열을 구해놓는다.
 * 2. 답 배열과 123번 배열을 filter로 비교하여 123번의 점수를 구한다.
 * 3. 가장 높은점수 배열에 담아서 return 같은점수가 있다면 오름차순으로 return
 */

function solution(answers) {
  var answer = [];

  // 찍는 방식
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 제출한 답 배열
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  // 찍는 방식으로 현재 문제 수 만큼 제출한 답 배열에 담기
  for (let i = 0; i < answers.length; i++) {
    arr1.push(a1[i % a1.length]);
    arr2.push(a2[i % a2.length]);
    arr3.push(a3[i % a3.length]);
  }

  // 제출한 답과 정답을 비교해 각자 점수 구하기
  let score1 = answers.filter((el, i) => el === arr1[i]).length;
  let score2 = answers.filter((el, i) => el === arr2[i]).length;
  let score3 = answers.filter((el, i) => el === arr3[i]).length;

  // 이름과 점수 배열로 담기
  let arr = [
    [1, score1],
    [2, score2],
    [3, score3],
  ];

  // 객체의 값들 중 최대점수 찾기
  let max = Math.max(...arr.map(([name, score]) => score));

  // 최대점수를 가지고있는 배열 찾기
  answer = arr.filter(([name, score]) => score === max);

  // 이름만 추출
  answer = answer.map(([name, score]) => name);

  // 오름차순으로 순서 변경
  answer = answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
