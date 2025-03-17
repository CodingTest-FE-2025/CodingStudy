// https://school.programmers.co.kr/learn/courses/30/lessons/42577

/**
 * 1.
 */

// 시간 오류
// function solution(phone_book) {
//   var answer = true;

//   const phoneSet = new Set(phone_book);

//   phoneSet.forEach((el) => {
//     phoneSet.forEach((el2) => {
//       if (el !== el2 && el2.startsWith(el)) {
//         answer = false;
//       }
//     });
//   });

//   return answer;
// }

function solution(phone_book) {
  const phoneSet = new Set(phone_book); // 모든 전화번호를 Set에 저장

  for (let number of phone_book) {
    // 모든 전화번호를 하나씩 확인
    for (let i = 1; i < number.length; i++) {
      // 1자리부터 끝까지 부분 문자열 검사
      let prefix = number.slice(0, i); // 앞에서부터 i번째까지 자른 부분
      if (phoneSet.has(prefix)) {
        // Set에 있으면 접두어!
        return false; // 접두어가 발견되면 false 반환
      }
    }
  }

  return true; // 접두어가 없으면 true 반환
}
console.log(solution(["119", "97674223", "1195524421"]));
