/*
toString(3) = 10진수 -> 3진번으로 변환
split('') = 3진수으로 변환할때 toString으로 변환했기 때문에 이미 문자열로 정의, split을 통해 3진수으로 변환된 문자열 분리하여 array에 담음.
reverse() = 문자열 뒤집기
join('') = 뒤집힌 문자열 다시 합쳐줌
parseInt(ternary, 3) = 3진수으로 되어있는 ternary를 10진수으로 다시 변환해줌.

parseInt 사용법 = parseInt(string, radix)
string에 적은 문자열은 radix진수이니 10진수으로 바꿔줘

풀면서 막혔던 부분
처음 10진수를 변환했을때는 toString(3)으로 변환했고 이후 다시 10진수로 바꿀때도 toString(10)으로 바꾸려고 헀는데 문제가 생김.
우선 toString 자체가 숫자 -> 문자로 변환해주는 메소드이기 떄문에 문자 -> 문자로는 변환이 되지 않음.
그래서 숫자로 Number를 통해 숫자로 변환해서 다시 toString(10)으로 변환하려 했으나 
1번 예제처럼 0021으로 변환되는 경우 Number로 변환하면 0021 -> 21로 변환되서 원하는 값이 나오지 않음.
안전하게 10진수로 변환하는 과정은 parseInt를 통해 변환하는게 좋다.
*/

function solution(n) {
  let answer = 0;
  let ternary = n.toString(3).split("").reverse().join("");
  return (answer = parseInt(ternary, 3));
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
