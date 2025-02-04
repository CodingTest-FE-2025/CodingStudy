function solution(numbers) {
  let numSet = new Set(); // 중복 방지를 위한 Set

  // 모든 숫자 조합을 만드는 함수
  function makeNumbers(current, others) {
    if (current.length > 0) numSet.add(Number(current)); // 숫자로 변환 후 추가
    if (others.length === 0) return; // 남은 숫자가 없으면 종료

    for (let i = 0; i < others.length; i++) {
      makeNumbers(
        current + others[i],
        others.slice(0, i) + others.slice(i + 1)
      );
    }
  }

  // 소수 판별 함수
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 조합 만들기 실행
  makeNumbers("", numbers);

  // 소수 개수 세기
  return [...numSet].filter(isPrime).length;
}

// 테스트
console.log(solution("17")); // 3 (7, 17, 71)
console.log(solution("011")); // 2 (11, 101)
