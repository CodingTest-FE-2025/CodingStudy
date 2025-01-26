/**
 * 카드 2
 * 순차적으로 배열에 들어가있고 
 * 한텀마다 : 맨 위 숫자는 shift 되고, 그 다음 숫자는 shift되고 push 됨
 * 마지막에 한장 남는 숫자의 값을 구해라
sol. 
1. N 길이의 배열 안에 1,2,3,.. 순차적으로 주어진 만큼 일단 스택을 완성 
<마지막 카드를 알아야되니까 while 문 사용>
2. 스택의 맨 앞 값을 빼야 되니까 shift 사용
while(stack.length>1){
    stack.shift();
    stack.push(stack.shift())
}

console.log(stack[0])
-> 시간 초과

sol2. deque 사용
deque : 양쪽에서 삽입 제거가 가능한 자료구조 
LinkedList, splice를 사용해도 되지만 이건 단순한 구조라 인덱스를 옮기는 식으로 구현

 */

const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);

// 1부터 N까지 배열 생성
const stack = Array.from({ length: input }, (_, i) => i + 1);

let index = 0;

while (stack.length - index > 1) {
  index++;
  stack.push(stack[index]);
  index++;
}

console.log(stack[index]);
