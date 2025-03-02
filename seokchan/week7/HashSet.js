/*
Set
1. Set 이란?
- value값 만을 저장하며 중복을 허용하지 않는 Collection 입니다. 동일한 값은 1개만 가질 수 있습니다.
- value값으로 같은 객체가 들어올 경우에는 중복값으로 인지하지 않습니다.
- 대소문자를 구분하기 때문에, hi와 HI는 다른 값으로 인지합니다.

2. 왜 사용할까?
- value값으로 고유한 값을 가질 수 있습니다.
- 중복값을 제거할 수 있습니다.
const empty = new Set();
console.log(empty); // Set(0) {}

const nums = new Set([1, 2, 3, 4, 5]);
console.log(nums); // Set(5) { 1, 2, 3, 4, 5 }

const str = new Set('HELLO');
console.log(str); // Set(4) { 'H', 'E', 'L', 'O' }

const objArr = new Set([
  {name:'라이언',company:'kakao'},
  {name:'브라운',company:'naver'},
  {name:'프로도',company:'kakao'},
  {name:'라이언',company:'kakao'}, 
  {name:'펭수',company:'ebs'}
]);
console.log(objArr);
Set(5) {
  { name: '라이언', company: 'kakao' },
  { name: '브라운', company: 'naver' },
  { name: '프로도', company: 'kakao' },
  { name: '라이언', company: 'kakao' },
  { name: '펭수', company: 'ebs' }
}
*/

//요소 추가: Set.add(value)
const nums = new Set([1, 2, 3, 4, 5]);

nums.add(200);
console.log(nums); // Set(6) { 1, 2, 3, 4, 5, 200 }

//요소 일부 삭제: Set.delete(value)
nums.delete(2);
console.log(nums); // Set(5) { 1, 3, 4, 5, 200 }

//요소 존재 확인: Set.has(value)
const isChecked = nums.has(200);
console.log(isChecked); // true

//요소 갯수 확인: Set.size
const checkSize = nums.size;
console.log(checkSize); // 5

//요소 전체 삭제: Set.clear()
nums.clear();
console.log(nums); // Set(0) {}

//Set 반복문 (for-of)
const strArr = new Set(["A", "B", "C", "D", "E"]); // new Set('ABCDE') 일때도 결과는 같다
console.log(strArr); // Set(5) { 'A', 'B', 'C', 'D', 'E' }

for (const alphabet of strArr) {
  console.log(alphabet); // A B C D E
}

for (const alphabet of strArr.keys()) {
  console.log(alphabet); // A B C D E
}

for (const alphabet of strArr.values()) {
  console.log(alphabet); // A B C D E
}

//Set -> Array 변환
const names = new Set(["john", "alice", "john"]);
console.log(names); // Set(2) { 'john', 'alice' }

const check1 = Array.from(names);
console.log(check1); // [ 'john', 'alice' ]

const check2 = [...names];
console.log(check2); // [ 'john', 'alice' ]
