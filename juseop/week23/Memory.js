/**
 * 추억 점수
 *
 * 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 한다.
 * 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 된다.
 * 예를 들어 사진 속의 인물이 ["may", "kein", "kain"] 이고,
 * 각 인물의 그리움 점수가 [5점, 10점, 1점] 일 때, 해당사진의 추억 점수는 16(5 + 10 + 1)점이 된다.
 * 다른 사진 속 인물의 이름이 ["Kali", "mari", "don", "tony"]이고, ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]이고,
 * "tony"의 그림움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11+1+55)점이다.
 *
 * 그리워 하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때,
 * 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해라.
 *
 * 제한 사항
 * 3<= name의 길이 = yearning의 길이 <= 100
 * * 3<= name의 원소 길이 <= 7
 * * name의 원소들은 알파벳 소문자로 이루어져 있다.
 * * name에는 중복된 값이 들어가지 않는다.
 * * 1<= yearning[i] <= 100
 * * yearning[i]는 i번째 사람의 그리움 점수이다.
 *
 * 3<= photo의 길이 <= 100
 * * 1<= photo[i]의 길이 <= 100
 * * 3<= photo[j]의 원소(문자열)의 길이 <= 7
 * * photo[i]의 원소들은 알파벳 소문자로만 이루어져 있다.
 * * photo[i]의 원소들은 중복되지 않는다.
 *
 * 입출력 예
 * name = ["may", "kein", "kain", "radi"], yearning = [5, 10, 1, 3], photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]], result = [19, 15, 6]
 * name = ["kali", "mari", "don"], yearning = [11, 1, 55], photo = [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]], result = [67, 0, 55]
 * name = ["may", "kein", "kain", "radi"], yearning = [5, 10, 1, 3], photo = [["may"],["kein", "deny", "may"], ["kon", "coni"]], result = [5, 15, 0]
 */

function solution(name, yearning, photo) {
  const scoreMap = new Map();
  for (let i = 0; i < name.length; i++) {
    scoreMap.set(name[i], yearning[i]);
  }
  return photo.map((arr) =>
    arr.reduce((acc, person) => acc + (scoreMap.get(person) || 0), 0)
  );
}
