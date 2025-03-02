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

function solution(participant, completion) {
  let answer = "";
  playerRecord = new Map();

  // 참가자 value에 +1
  for (const player of participant) {
    playerRecord.set(player, (playerRecord.get(player) || 0) + 1);
  }

  //완주자 value에 -1, 미완주자는 +1 그대로
  for (const player of completion) {
    playerRecord.set(player, playerRecord.get(player) - 1);
  }

  // playerRecord에서 value(record)가 0보다 크면 리턴
  for (const [player, record] of playerRecord) {
    if (record > 0) {
      return player;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
