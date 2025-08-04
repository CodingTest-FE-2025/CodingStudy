/**
 * 기사단원의 무기
 *
 * 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있다.
 * 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매한다.
 * 단, 공격력의 제한수치를 정하고ㅗ 협약기관에서 정한 공격력을 가지는 무기를 구매해야한다.
 * 15번으로 지정된 기사는 15의 약수는 1, 3, 5, 15로 총 4개가 존재하므로 공격력인 4인 무기를 구매.
 * 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과ㅗ한 기사단원은 무기점에서 공격력이 2인 무기를 구매한다.
 * 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요.
 * 기사단원의 수를 나타내는 정수 number와 공격력의 제한수치 limit, 제한수치를 초ㅗ과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 떄, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return
 *
 * 제한사항
 * 1<= number <= 100,000
 * 2 <= limit <= 100
 * 1 <= power <= limit
 *
 * 입출력 예
 * number= 5, limit=3, power=2 => return=10
 * number=10, limit=3, power=2 => return=21
 *
 */

function solution(number, limit, power) {
  let totalWeight = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        divisorCount++;
        if (j !== i / j) {
          divisorCount++;
        }
      }
    }

    if (divisorCount > limit) {
      totalWeight += power;
    } else {
      totalWeight += divisorCount;
    }
  }

  return totalWeight;
}
