function solution(nums) {
  const numsSet = new Set(nums);
  console.log(numsSet);

  if (Math.floor(nums.length / 2) > numsSet.size) {
    return numsSet.size;
  } else {
    return Math.floor(nums.length / 2);
  }
}

console.log(solution([3, 1, 2, 3])); //2
