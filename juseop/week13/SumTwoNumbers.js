/**
 * 두 개 뽑아서 더하기
 * 정수 배열 numbers가 주어진다.
 * numbers에서 서로다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return
 *
 * 입출력 예
 * numbers: [2,1,3,4,1]  result: [2,3,4,5,6,7]
 * numbers: [5,0,2,7] result: [2,5,7,9,12]
 *
 */

function solution(numbers) {
  let answer = new Set(); // Set을 사용하여 중복된 값을 제거
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}

// numbers배열의 모든 쌍을 순회하며 두 수의 합을 구함.
// set을 사용하여 중복된 합을 제거.
// 마지막으로, set을 배열로 변환하고 오름차순으로 정렬하여 반환함.
