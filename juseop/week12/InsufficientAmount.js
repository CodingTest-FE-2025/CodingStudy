/**
 * 부족한 금액 계산하기
 * 놀이기구의 원래 이용료 price원이고, 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 받기로 했다.
 * 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상된다.
 * 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마나 모자라는지를 return하라.
 * 금액이 부족하지 않으면 0을 return하라.
 *
 */

//price 3, count 4, money 20 => result 10
//3인 놀이기구를 4번타면 3+6+9+12 = 30이므로 30-20 = 10이 된다.

function solution(price, money, count) {
  let answer = -1;
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  if (total > money) {
    answer = total - money;
  } else {
    answer = 0;
  }
  return answer;
}
