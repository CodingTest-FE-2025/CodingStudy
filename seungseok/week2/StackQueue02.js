// https://school.programmers.co.kr/learn/courses/30/lessons/42586

/**
 * 생각한 방법
 *
 * 1. progresses 배열을 speeds와 하나씩 조합해서 100이 넘을때 배열을 새롭게 정한다.
 * 2. [93, 30, 55] 와 [1, 30, 5] 에서 두번째로 예를 들면 Math.ceil((100 - 30) / 30);
 * 3. [7, 3, 9] 새로 나온 배열을 reduce사용
 * 4. 기본 1로 시작. 현재값이 이전값보다 같거나 작으면 +1, 크면 다음 배열
 *
 */

function solution(progresses, speeds) {
  const arr = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));

  return arr
    .reduce((acc, cur) => {
      if (acc.length === 0 || acc[acc.length - 1][0] < cur) {
        acc.push([cur, 1]);
      } else {
        acc[acc.length - 1][1]++;
      }
      return acc;
    }, [])
    .map((el) => el[1]);
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

/**
 * 알게된 내용
 *
 * reduce를 사용하게 되면 항상 배열을 감싸기때문에 이중배열이 나오기도 함.
 *
 */
