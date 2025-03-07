/** 폰켓몬
 * set함수로 중복을 제거 하고
 * 가지고 올수 있는 수랑 비교해서 더 작은게 답
 *
 */

function solution(nums) {
  const phoneketMon = new Set(nums);
  const selectNum = nums.length / 2;
  const phoneketMonNum = phoneketMon.size;
  return Math.min(phoneketMonNum, selectNum);
}
