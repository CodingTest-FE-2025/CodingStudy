/*
while문을 통해서 a와 b가 같은 라운드에서 만날때 까지 반복
참가 번호는 중요하지 않음.
같은 라운드에 상대하게 될 두명을 같은 조로 묶고 그 조를 구하는 식을 만들어야됨.
1,2 = 1, 3,4 = 2, 5,6 = 3
n/2로 나누고 Math.ceil로 올림 처리하여 조를 정해줌
a,b가 같은 조로 묶이면 끝
*/

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}

console.log(solution(6, 4, 7));
