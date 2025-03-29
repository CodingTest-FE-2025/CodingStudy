//https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

/**
 *
 * 1. dungeons 배열을 순열로 만들어서 모든 경우의 수를 구한다.
 * 2. k로 시작해서 탐험가능한 던전의 수를 구하고 배열에 저장한다.
 * 3. 배열에서 최대값을 구한다.
 */

function solution(k, dungeons) {
  var answer = -1;

  // 순열을 구하는 함수 암기하기!
  // arr : 배열
  // selectNum : 선택할 개수 * arr.length을 적으면 배열의 길이만큼 선택
  function getPermutations(arr, selectNum) {
    const results = [];

    if (selectNum === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNum - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
  }

  // 던전배열의 순열
  const dungeonsArr = getPermutations(dungeons, dungeons.length);

  // 탐험한 던전의 수 배열
  let countArr = [];

  dungeonsArr.forEach((dungeon) => {
    let k2 = k; // 피로도 초기화
    let count = 0; // 탐험한 던전의 수

    dungeon.forEach((el) => {
      if (k2 >= el[0]) {
        // 탐험 가능
        k2 = k2 - el[1]; // 피로도 감소
        count++; // 탐험한 던전의 수 증가
      }
    });

    countArr.push(count);
  });

  answer = Math.max(...countArr); // 최대값 구하기

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
