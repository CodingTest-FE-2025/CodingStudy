// https://school.programmers.co.kr/learn/courses/30/lessons/82612

/*



1. 총 필요한 금액 구하기 for문 사용!
    for문을 돌면서 1부터 count까지의 합을 구하고 그 값에 price를 곱하기
    let total = 0;
    for (let i = 1; i <= count; i++) {
      total += price * i;
    }

1. 총 필요한 금액 구하기 => price * count * (count + 1) / 2
    3 * 4 * (4 + 1) / 2 = 30

    (x * 1) + (x * 2) + (x * 3) + (x * 4)
    =
    x * (1 + 2 + 3 + 4)
    -
    x * (4 * (4 + 1) / 2)  ** 1~n까지의 합 = n * (n + 1) / 2

2. money가 부족한지 확인하기
3. 부족하면 answer에 입력
4. 부족하지 an다면 0 입력

*/

function solution(price, money, count) {
  var answer = -1;
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  if (money < total) {
    answer = total - money;
  } else {
    answer = 0;
  }

  return answer;
}

console.log(solution(3, 20, 4));
