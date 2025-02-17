/**
 * 제로
 * 첫번째 줄에 정수 k가 주어지고 그 이후에 k개의 줄에 정수가 하나씩 주어진다.
 * 잘못된 수를 입력할 경우 0을 외쳐서 가장 최근의 수를 지우게 한다.
 * 입력된 정수 다음으로 오는 숫자가 0일 경우 그 숫자를 지워버리고
 * 입력된 정수 다음으로 ㅇ는 숫자가 0이 아닐경우 그 숫자는 놔둔다.
 * 예제2를 보면 연속으로 정수가 입력되도 0이 연속으로 나올 경우 최근의 수를 지우고
 * 그 다음 최근의 수를 지운다.
 * 단어의 연속을 줄이고
 */


const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);


const k = input[0]; // 첫번째 숫자 = 명령의 개수
const numbers = [...input].slice(1); // 나머지 숫자들
const stack=[]; // 스택을 빈 배열로 초기화
for (let i=0; i<k; i++ ){
    if (numbers[i]===0) { 
        stack.pop(); // 0일 경우 스택에서 마지막 숫자를 제거
    }else {
        stack.push(numbers[i]); // 0이 아닌 숫자는 스택에 추가
    }
}
const result = stack.reduce((sum,num)=>sum+num, 0); // 스택의 합 계산
console.log(result)
