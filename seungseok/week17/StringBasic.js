// https://school.programmers.co.kr/learn/courses/30/lessons/12918

/**
 * isNan으로 숫자 판별
 *
 */

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  return !isNaN(Number(s));
}

// 합쳐서 확인하며 0x16 진수로 판단됨..

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) {
      return false;
    }
  }

  return true;
}
