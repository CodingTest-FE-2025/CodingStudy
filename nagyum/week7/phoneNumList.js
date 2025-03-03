/**
 * 전화번호 목록
 * sol.
 * 주어진 전화번호 목록을 맵에
 */

function solution(phone_book) {
  const phoneMap = new Map();
  for (const phone of phone_book) {
    phoneMap.set(phone, true);
  }
  for (const phone of phone_book) {
    let prefix = "";
    for (let i = 0; i < phone.length - 1; i++) {
      prefix += phone[i];
      if (phoneMap.has(prefix)) {
        return false;
      }
    }
  }
  var answer = true;
  return answer;
}
