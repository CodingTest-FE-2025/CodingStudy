/**
 * 소수
 * 한자리 숫자가 적힌 종이 조각 = numbers
 * 각각 종이장으로 만들수 있는 소수
 * 
 * sol.
 * numbers로 주어진 문자열을 split
 * 가능한 모든 문자열을 찾고 아래와 같은 함수 통과
 * 소수가 되는 조건 : 분해할때 1과 자기 자신만 존재하도록
 * function isPrime(num) {
    if (num < 2) return false; // 2보다 작은 숫자는 소수가 아님
    
    for (let i = 2; i <= Math.sqrt(num); i++) { // √num까지만 확인하면 됨
        if (num % i === 0) { // 나누어 떨어지면 소수가 아님
            return false;
        }
    }
    return true; // 위 조건을 통과하면 소수
}
 */

function solution(numbers) {
  const numSet = new Set(); // 중복 제거를 위한 Set

  // 1. 주어진 문자열의 숫자로 가능한 모든 조합을 찾음
  function getPermutations(arr, fixed = "") {
    if (fixed.length > 0) numSet.add(Number(fixed)); // 숫자로 변환하여 Set에 추가

    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr];
      rest.splice(i, 1); // 현재 선택한 숫자를 제외한 배열
      getPermutations(rest, fixed + arr[i]); // 재귀 호출
    }
  }

  getPermutations(numbers.split("")); // numbers 문자열을 배열로 변환 후 순열 생성

  // 2. 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false; // 2 미만은 소수 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // 나누어 떨어지면 소수 아님
    }
    return true;
  }

  // 3. Set에 저장된 숫자들 중 소수 개수 반환
  return [...numSet].filter(isPrime).length;
}

// 예제 실행
console.log(solution("17")); // 3 (7, 17, 71)
console.log(solution("011")); // 2 (11, 101)
