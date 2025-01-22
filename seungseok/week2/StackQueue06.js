// https://school.programmers.co.kr/learn/courses/30/lessons/42584

/**
 * 생각한 방법
 *
 * 1. [4,5,1,2,6,1,1] 를 map 메서드 사용하여 하나씩 남은것들과 하나씩 비교함.
 * 2. 처음 가격과 하나씩 비교하여 떨어질때 까지의 직전의 시간 초를 구함.
 *
 *  ex)
 *
 *  4 -> 5 (+1)
 *  4 -> 1 (+1) 마지막 떨어지기 직전까지 시간이라 +1
 *  끝 최종 2
 *
 *  5 -> 1 (+1) 마지막 떨어지기 직전까지 시간이라 +1
 *  끝 최종 1
 *
 *  1 -> 2 (+1)
 *  1 -> 6 (+1)
 *  1 -> 1 (+1)
 *  1 -> 1 (+1)
 *  끝 최종 4
 *
 *  2 -> 6 (+1)
 *  2 -> 1 (+1) 마지막 떨어지기 직전까지 시간이라 +1
 *  끝 최종 2
 *
 *  6 -> 1 (+1) 마지막 떨어지기 직전까지 시간이라 +1
 *  끝 최종 1
 *
 *  1 -> 1 (+1)
 *  끝 최종 1
 *
 *  1 -> 없읍
 *  끝 최종 0
 *
 * 3. 배열에 담으면 [2,1,4,2,1,1,0] 리턴
 *
 */

function solution(prices) {
  return prices.map((el, i) => {
    let num = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (el <= prices[j]) {
        num++;
      } else {
        num++;
        break;
      }
    }
    return num;
  });
}

console.log(solution([4, 5, 1, 2, 6, 1, 1]));

/**
 * 답안지
  function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];
    let length = prices.length;

    for(let i = 0; i < length; i++) {
      while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
        let temp = stack.pop();
        answer[temp] = i - temp;
      }
      stack.push(i);
    }

    while(stack.length) {
      let temp = stack.pop();
      answer[temp] = length - temp - 1;
    }

    return answer;
  }
 */

/**
 * 알게된 점
 *
 * 위에 주석 답안 처럼 stack queue로 풀어야 맞을듯..
 *
 */
