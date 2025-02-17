// 데이터를 선입선출의 방식으로 처리하는 자료구조
// 프로세스 마다 우선순위를 주어져서 먼저 들어온 데이터가 먼저 나가도 우선순위에 따라 선입선출이 나뉘게 결정함.
// 숫자가 클수록 우선순위가 높음.

// priorities는 각 프로세스의 우선순위를 나타낸다.
// 처리규칙은 큐에서 프로세스를 하나 꺼내고 꺼낸 프로세스 보다 더 높은 우선순위의 프로세스가 남아있다면 방금 꺼낸 프로세스를 큐 맨뒤에 다시 넣는다.
// 그렇지 않다면 꺼낸 프로세스를 실행시킨다. 이과정을 반복.
// location에 있는 프로세스가 몇번째로 실행되는지 구현
// 예제에서 우선순위가 3인 숫자가 location 2이고 우선순위가 제일 크기 때문에 첫번째로 실행 그래서 답은 1.
// 제한사항으로는 중요도가 담긴 배열의 길이는 1이상 100이하.
// 원소는 1이상 9이하의 정수
// location은 인덱스 0 이상 (프로세스 수 -1) 이하의 값을 가진다.

function solution (priorities, location) {
    let array = priorities.map((process, index)=> ({process, index}))
    // priorities 배열을 process(우선순위)와 index(원래위치)를 포함한객체 배열로 반환.
    let count = 0;

    while(array.length){
        const que = array.shift();
        if (array.some((element)=> element.process > que.process)){
            array.push(que);
            //첫번째 요소를 some 메서드를 사용해서 que.process 값보다 큰게 있는지 없는지 확인 있으면 다시 큐 끝으로 push
        }else {
            count ++
            if(que.index === location);
            return count
            // 없으면 count++ index 값이 location이랑 같아지면 count값을리턴.
        }
    }
}


