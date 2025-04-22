// https://school.programmers.co.kr/learn/courses/30/lessons/68644

/**
 *
 * 1. 순열로 2개의 모든 조합을 구한다.
 * 2. 각 조합의 합을 구한다.
 * 3. 중복을 제거
 * 4. 오름차순으로 정렬한다.
 *
 */

function solution(numbers) {
  var answer = [];

  // 순열 구하는 공식
  function getPermutations(arr, r) {
    const result = [];

    function recur(path, used) {
      if (path.length === r) {
        result.push([...path]);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        path.push(arr[i]);
        recur(path, used);
        path.pop();
        used[i] = false;
      }
    }

    recur([], Array(arr.length).fill(false));
    return result;
  }

  arr = getPermutations(numbers, 2);

  const sums = [];
  for (const pair of arr) {
    const sum = pair[0] + pair[1];
    sums.push(sum);
  }

  answer = [...new Set(sums)];
  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
