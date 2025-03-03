/* 완주하지 못한 선수

처음 생각
: 그냥 두 개의 배열을 다 map객체로 바꿔서 각각 루프를 돌면서 확인 하면 안되나..?
했지만 그러면 시간복잡도도 그렇고 풀이가 틀렷음,,
function solution(participant, completion) {
    const par = new Map(participant);  // ❌ participant를 Map으로 변환하는 방식이 틀림
    const com = new Map(completion);   // ❌ completion도 마찬가지

    for (let i = 0; i < par.size; i++) { // ❌ par.size 대신 participant.length 사용
        if (com.has(par[i])) {           // ❌ Map은 배열처럼 index로 접근 불가능
            par.delete(i);               // ❌ delete를 이렇게 쓰면 안됨
        }
        return par; // ❌ return이 for문 안에 있어서 첫 번째 반복에서 끝남
    }
}
=> map을 사용할려면 key, value가 있어야됨 (기억!)
sol. 
*/
function solution(participant, completion) {
  const par = new Map();

  for (let person of participant) {
    par.set(person, (par.get(person) || 0) + 1);
  }

  for (let person of completion) {
    if (par.has(person)) {
      par.set(person, par.get(person) - 1);
    }
  }

  // 남아 있는 선수 찾기
  for (let [key, value] of par) {
    if (value > 0) return key;
  }
}
