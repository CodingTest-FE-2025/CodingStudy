// https://school.programmers.co.kr/learn/courses/30/lessons/42579

/**
 * ["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]
 * 1. 장르의 종류와 총 횟수를 Map1에 정리한다.
 * 2. classic => 1450 pop => 3100
 * 3. value가 높은순으로 key를 정렬한다.
 * 4. pop => 3100 classic => 1450
 *
 * (1번째 방법)
 * 4. 처음 주어진 장르와 고유번호를 배열로 key, 재생횟수를 value로 Map2에 정리한다.
 * 5. ["classic",0] => 500 ["pop",1] => 600 ["classic",2] => 150 ["classic",3] => 800 ["pop",4] => 2500
 *
 * (2번째 방법)
 * 4. 처음 주어진 장르를 key로, 재생횟수와 고유번호를 배열로 value로 Map2에 정리한다.
 * 5. classic => [[500,0],[150,2],[800,3]] pop => [[600,1],[2500,4]]
 * 6. Map2의 value를 재생횟수가 높은순으로 정렬한다.
 * 7. classic => [[800,3],[500,0],[150,2]] pop => [[2500,4],[600,1]]
 *
 * 8. Map1의 key를 순회하며 Map2의 value를 2개씩 뽑아서 answer에 넣는다.
 * 9. 1개 뿐이면 1개만 넣는다.
 */

function solution(genres, plays) {
  var answer = [];
  let Map1 = new Map();
  let Map2 = new Map();

  // 1번 ~ 4번
  for (let i = 0; i < genres.length; i++) {
    Map1.set(
      genres[i],
      Map1.get(genres[i]) === undefined
        ? plays[i]
        : Map1.get(genres[i]) + plays[i]
    );
  }
  let map1Arr = [...Map1].sort((a, b) => b[1] - a[1]);
  Map1 = new Map(map1Arr);

  // 5번 ~ 7번
  for (let i = 0; i < genres.length; i++) {
    if (Map2.get(genres[i]) === undefined) {
      Map2.set(genres[i], [[plays[i], i]]);
    } else {
      Map2.get(genres[i]).push([plays[i], i]);
    }
  }
  // Map2 = new Map([...Map2].map(([g, v]) => [g, v.sort((a, b) => b[0] - a[0])]));

  // 8번 ~ 9번

  Map1.forEach((_, k) => {
    let value = Map2.get(k);
    if (value.length === 1) {
      answer.push(value[0][1]);
    } else {
      answer.push(value[0][1]);
      answer.push(value[1][1]);
    }
  });

  return [...Map2];
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
