// https://school.programmers.co.kr/learn/courses/30/lessons/42842

/**
 * 생각한 방법
 * 1. 10, 2를 더해서 12 만들고
 * 2. 12의 약수 구하기 [12, 1] [6, 2] [4, 3]
 * 3. [a, b]를 (a - 2 + b ) * 2 이 brown(10)이 되면 return
 * 4.
 */

function solution(brown, yellow) {
  var answer = [];
  let arr = [];
  let n = brown + yellow;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      arr.push([n / i, i]);
    }
  }

  answer = arr.filter((el) => {
    const [a, b] = el;
    return (a - 2 + b) * 2 === brown;
  });

  return answer.flat();
}

console.log(solution(13, 3));
