/** 푸드파이트
 음식의 수가 짝수라면 ㄱㅊ
 홀수라면 -1을 해서 짝수로 맞추기 -> 가 아니라 그냥 나눠서 몫만 생각하면 되는거였음
 그리고는 작은 수부터 나누기 2한 만큼  음식 배치 하면 되는
 food=[1,3,4,6]

 0번째 인덱스는 무조건 물임
 */
function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    answer += i.toString().repeat(count);
  }

  const reversed = answer.split("").reverse().join("");
  return answer + "0" + reversed;
}
