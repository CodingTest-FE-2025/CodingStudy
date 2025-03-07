/*

new Map()
-> Map 객체를 만들때 쓰인다.
map.set(key,value)
-> key를 이용해 value값을 저장한다.
map.get(key)
-> key에 해당하는 value를 반환한다.
map.has(key)
-> key가 존재한다면 true, 없다면 false를 반환한다.
map.delete(key)
-> key에 해당하는 값을 삭제한다.
map.size
-> 요소의 개수를 반환한다.

*/

function solution(nums) {
  var answer = 0;
  let typeCount = new Map();

  for (const type of nums) {
    typeCount.set(type, (typeCount.get(type) || 0) + 1);
  }

  const distinctTypes = typeCount.size;

  const pickLimit = nums.length / 2;

  return (answer = Math.min(distinctTypes, pickLimit));
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
