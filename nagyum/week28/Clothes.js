/** 체육복
 * 탐욕법 -> 당장의 최선만 선택하는 알고리즘
 *
 * n의 옷은 n-1, n+1 에게만 빌려줄수있음 '
 * 도난 당한 학생의 번호 : lost
 * 여벌 옷 학생의 번호 : reserve
 *
 * 최대한 많이 빌려 입을수있는 학생 수 는?
 *
 *
 */

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const clothes = Array(n).fill(1);

  lost.map((lost) => {
    clothes[lost - 1] = 0;
  });

  reserve.map((reserve) => {
    clothes[reserve - 1] += 1;
  });

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0) {
      if (i > 0 && clothes[i - 1] === 2) {
        clothes[i - 1] = 1;
        clothes[i] = 1;
      } else if (i < n - 1 && clothes[i + 1] === 2) {
        clothes[i + 1] = 1;
        clothes[i] = 1;
      }
    }
  }

  return clothes.filter((c) => c > 0).length;
}
