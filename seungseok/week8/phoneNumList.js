// https://school.programmers.co.kr/learn/courses/30/lessons/42577

/**
 * 1.
 */

function solution(phone_book) {
  var answer = true;

  const phoneSet = new Set(phone_book);

  phoneSet.forEach((el) => {
    phoneSet.forEach((el2) => {
      if (el !== el2 && el2.startsWith(el)) {
        answer = false;
      }
    });
  });

  return answer;
}

console.log(solution(["119", "97674223", "1195524421"]));
