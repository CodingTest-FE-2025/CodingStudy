function solution(arr) {
  const sortArr = [...arr];
  sortArr.sort((a, b) => a - b);
  const min = sortArr[0];
  const index = arr.indexOf(min);
  arr.splice(index, 1);

  return arr.length === 0 ? [-1] : arr;
}
