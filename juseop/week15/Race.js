/**
 * 달리기 경주
 * 1등부터 3등까지 "mumu", "soe", "poe"가 있다.
 * 선수들이 순서대로 달리고 있을 때, 해설진이 "seo"를 불렀다면 2등인 "soe"가 1등으로 올라가고,
 * "mumu"는 2등으로 내려간다.
 * 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 주어질 때,
 * 경주가 끝났을 때 선수들의 이름을 1등 부터 등수 순서대로 배열에 담아 return
 *
 * 제한 사항
 * 1. 5 <= players의 길이 <= 50,000
 * - pleyers[i]는 i번째 선수의 이름을 의미
 * - players의 원소들은 알파벳 소문자로만 이루어져 있다.
 * - players에는 중복된 값이 들어가있지 않다.
 * - 3 <= callings의 길이 <= 10
 * 2. 2 <= callings[i]의 길이 <= 1,000,000
 * - callings는 players의 원소로만 이루어져 있다.
 * - 경주 진행중 1등인 선수의 이름은 불리지 않는다.
 *
 * 입출력 예
 * players = ["mumu", "soe", "poe", "kai", "mine"]
 * callings = ["kai", "kai", "mine", "mine"]
 * result = ["mumu", "kai", "mine", "soe", "poe"]
 * 4등인 "kai"가 2번 추월하여 2등으로 올라가고,
 * 앞선 3등과 2등인 "poe", "soe"는 각각 4등과 3등으로 내려간다.
 * 5등인 "mine"도 2번 추월하여 3등으로 올라가고,
 * "poe"는 5등으로 내려가고, "soe"는 4등으로 내려간다.
 *
 */

function solution(players, callings) {
  let answer = [];
  let indexMap = new Map(players.map((name, idx) => [name, idx])); // 선수 이름과 인덱스를 저장
  for (let i = 0; i < callings.length; i++) {
    let name = callings[i]; // 부른 선수 이름
    let idx = indexMap.get(name); // 부른 선수의 인덱스
    if (idx > 0) {
      // 부른 선수가 1등이 아닐 때
      let prevName = players[idx - 1]; // 이전 선수 이름
      players[idx] = prevName; // 현재 선수의 위치를 이전 선수로 변경
      players[idx - 1] = name; // 이전 선수의 위치를 현재 선수로 변경
      indexMap.set(name, idx - 1); // 현재 선수의 인덱스를 업데이트
      indexMap.set(prevName, idx); // 이전 선수의 인덱스를 업데이트
    }
  }
  return (answer = players); // 최종 선수 순서를 리턴
}
