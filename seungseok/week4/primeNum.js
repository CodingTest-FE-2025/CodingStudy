// https://school.programmers.co.kr/learn/courses/30/lessons/42839

/**
 * 1. numbers를 배열로 변환
 * 2. 배열의 숫자를 조합해서 나올수있는 수 전부 구하기
 * 3. 두자리수 이상 중에서 첫번째자리가 0이면 0삭제 ex) 011 -> 11
 * 4. 배열중 소수의 갯수 구하기
 */

function solution(numbers) {
  var answer = 0;

  const arr = numbers.split("");
  //중복 제거
  const numSet = new Set();

  // 모든 조합 찾기 함수
  function getCombinations(arr, prefix = "") {
    if (prefix.length > 0) {
      numSet.add(Number(prefix)); // 숫자로 변환하여 저장
    }
    for (let i = 0; i < arr.length; i++) {
      getCombinations(
        [...arr.slice(0, i), ...arr.slice(i + 1)],
        prefix + arr[i]
      );
    }
  }
  getCombinations(arr);

  // 소수 찾기 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 모든 조합 중 소수 찾기
  answer = [...numSet].filter((num) => isPrime(num)).length;

  return answer;
}

console.log(solution("17"));
