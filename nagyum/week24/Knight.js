/**
 * 기사 단원의 무기
 *  자신의 기사 번호 약수 갯수에 해당하는 공격력 무기만 살 수 있음
 *  공격력의 제한 수치를 정하고, 더 큰 공격력을 가진 무기를 살려면 협약기관 뭐시기 저시기
 *
 * sol
 * 1. 약수의 갯수를 구하는 함수 만들기
 * 2. 배열을 순회 하면서 초과 되는 공격력 filter 로 찾아서 power로 바꾸고
 * 3. 전체 sum 해버리기
 *
 * number : 기사 단원의 수 limit: 공격력의 제한 수치 power: 제한 수치를 초과한 기사가 사용할 공격력
 */

function measure(i) {
  let total = 0;
  for (let j = 1; j * j <= i; j++) {
    if (i % j === 0) {
      total += j * j === i ? 1 : 2;
    }
  }
  return total;
}

function solution(number, limit, power) {
  let array = [];
  for (let x = 1; x <= number; x++) {
    array.push(measure(x));
  }
  const answer = array
    .map((y) => (y > limit ? power : y))
    .reduce((a, b) => a + b, 0);

  return answer;
}
