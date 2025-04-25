/** 소수 만들기
 * 소수가 되는지 판별하는 함수 만들고 (isPrime)
 * 3개의 조합을 만들 수 있는 순열 함수 만들고
 * 비교하면 되나..?
 */

function solution(nums) {
  var answer = 0;

  function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results; 
  }

  const combinations = getCombinations(nums, 3);

  for (const list of combinations) {
    const sum = list.reduce((acc, cur) => acc + cur, 0);
    if (isPrime(sum)) answer++;
  }
  return answer;
}
