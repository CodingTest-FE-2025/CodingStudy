function solution(numbers) {
  const numSet = new Set(); // 중복을 피하기 위한 Set

  //  숫자 조합 만들기 (순열)
  function makeNumbers(current, remaining) {
    if (current) numSet.add(Number(current)); // 숫자로 변환 후 저장

    for (let i = 0; i < remaining.length; i++) {
      makeNumbers(
        current + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  makeNumbers("", numbers);

  //  소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  //  소수 개수 세기
  return [...numSet].filter(isPrime).length;
}
