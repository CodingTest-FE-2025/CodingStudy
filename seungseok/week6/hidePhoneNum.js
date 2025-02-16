// https://school.programmers.co.kr/learn/courses/30/lessons/12948

/**
 * 1. 빈배열 [] 생성
 * 2. for문 돌면서 if문 i가 뒤에서 4번째 오기 전까지는 배열에 * push
 * 3. 뒤에서 4번째부터는 phone_number[i] push
 */

function solution(phone_number) {
  var answer = "";
  const arr = [];

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      arr.push("*");
    } else {
      arr.push(phone_number[i]);
    }
  }

  answer = arr.join("");

  return answer;
}

console.log(solution("01033334444"));
