// https://school.programmers.co.kr/learn/courses/30/lessons/42587

/**
 * 생각한 방법
 *
 * 1. [2, 1, 3, 2] 를 [[2,0],[1,1],[3,2],[2,3]] 뒤에 01234.. 순서대로 이중배열을 만들어준다.
 * 2. arr[0]의 내림차수로 정렬한다. [[3,2],[2,3],[2,0],[1,1]] (같으면 arr[1]의 내림차수로 정렬한다.? 자동으로 정렬이 될지는 모르겠음)
 * 3. a[1] for문 돌며 location을 찾아 몇번째인지 확인하고 +1 하여 리턴한다.
 */

// function solution(priorities, location) {
//   let arr = priorities.map((el, i) => [el, i]);
//   arr.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1]; // 두 번째 요소는 오름차순
//     } else {
//       return b[0] - a[0]; // 첫 번째 요소는 내림차순
//     }
//   });

//   let answer = 0;
//   arr.forEach((el, i) => {
//     if (el[1] === location) {
//       answer = i + 1;
//     }
//   });

//   return answer;
// }

function solution(priorities, location) {
  let queue = priorities.map((priority, index) => [priority, index]); // 우선순위와 인덱스를 포함한 큐 생성
  let answer = 0;

  for (let i = 0; queue.length > 0; i++) {
    let current = queue.shift(); // 첫 번째 작업 꺼냄

    // 현재 작업보다 높은 우선순위가 남아 있다면 큐의 끝으로 보냄
    if (queue.some((item) => item[0] > current[0])) {
      queue.push(current);
    } else {
      answer++; // 처리 순서 증가
      if (current[1] === location) {
        // location에 해당하는 작업이면 반환
        return answer;
      }
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));

/**
 * 알게된 점
 * sort 메서드로 디테일한 작업을 할수없으면
 * some을 사용해서 직접 만들어야함.
 */
