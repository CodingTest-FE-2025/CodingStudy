/**
 * 하샤드 수]
 *
 * x  = x / (x의 자릿수 합들)
 *
 * split 사용해서 x의 자릿수 합들 구하고 그걸 나눴을때 true 가 되면 됨
 */

function solution(x) {
  var answer = true;
  var num = String(x);
  var sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  if (x % sum === 0) return true;
  else return false;
}
