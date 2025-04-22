/**
 * 소수 만들기
 * 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려합니다.
 * 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때
 * nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return
 *
 *
 * 입출력 예
 * nums = [1,2,3,4] => 1
 * nums = [1,2,7,6,4] => 4
 *
 * nums의 각 원소는 1이상 1,000이하의 자연수이고, 중복된 숫자는 없다.
 *
 */

// nums의 배열에서 서로 다른 3개의 수를 골라 더하여 소수인지 확인...
// 소수는 1과 자기 자신만으로 나누어 떨어지는 수
function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let l = j + 1; l < nums.length; l++) {
        let sum = nums[i] + nums[j] + nums[l];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
  //소수인지 확인하는 함수
  function isPrime(sum) {
    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) return false;
    }
    return true;
  }
}

//1. nums 배열에서 서로 다른 3개의 수를 골라 더하는 경우의 수를 구한다.
//2. 더한 수가 소수인지 확인한다.
//3. 소수인 경우 answer를 1 증가시키고 반환.
//5. 소수인지 확인하는 함수를 만들어서 2부터 sum-1까지 나누어 떨어지는 수가 있는지 확인한다.
//6. 나누어 떨어지는 수가 없으면 소수이다.
