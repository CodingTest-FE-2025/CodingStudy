/*일단 기본 : clothes의 배열 길이만큼은 입을수있음 무조건
그다음에 조합을 해야됨
근데 주어진 2차원 배열이 [이름,종류] 라서 map할때 key 값을 종류로 해서 같은 종류끼리 묶고 해당 종류의 숫자로 조합을 할까
*/

function solution(clothes) {
  const map = new Map();

  clothes.forEach(([name, type]) => {
    map.set(type, (map.get(type) || 0) + 1);
  });
  return [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
