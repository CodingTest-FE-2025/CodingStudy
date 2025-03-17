/**
 * 두개의 단어 begin, target과 단어의 집합 words이 있다.
 * 한 번에 한 개의 알파벳만 바꿀 수 있다.
 * words에 있는 단어로만 변환할 수 있다.
 * 라는 규칙을 이용해서 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾아라.
 * 예를 들어 begin이 hit, target가 cog, words가 [hot, dot, dog, lot, log, cog]라면
 * hit -> hot -> dot -> dog -> cog와 같이 4단계를 거쳐 변환할 수 있다.
 * 두개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때,
 * 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성하라.
 *
 * 제한사항
 * 각 단어는 알파벳 소문자로만 이루어져 있다.
 * 각 단어의 길이는 3이상 10이하이다.
 * words에는 3개이상 50개 이하의 단어가 있으며 모든 단어는 같다.
 * begin과 target은 같지 않다.
 * 변환할 수 없는 경우에는 0를 return 한다.
 *
 * 입출력 예
 * begin = hit, target = cog, words = [hot, dot, dog, lot, log, cog] return 4 ..?
 * begin = hit, target = cog, words = [hot, dot, dog, lot, log] return 0
 *
 * 1. hit → hot (h → h, i → o, t → t  한 글자만 바뀜, words에 있음)
 * 2. hot → dot (h → d, o → o, t → t  한 글자만 바뀜, words에 있음)
 * 3. dot → dog (d → d, o → o, t → g  한 글자만 바뀜, words에 있음)
 * 4. dog → cog (d → c, o → o, g → g  한 글자만 바뀜, words에 있음)
 */
// 1. BFS로 풀어야 할 것 같다.
// 2. 최소 단계를 찾기 위해...흠..

function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가

  let queue = [[begin, 0]]; // [현재 단어, 변환 횟수]
  let visited = Array(words.length).fill(false);

  while (queue.length > 0) {
    let [cur, answer] = queue.shift(); // 현재 단어와 변환 횟수 꺼내기

    if (cur === target) return answer; // target 도착 시 변환 횟수 반환
    // words 리스트를 돌면서 방문하지 않은 단어를 찾음
    for (let i = 0; i < words.length; i++) {
      if (!visited[i]) {
        let diff = 0;
        for (let j = 0; j < cur.length; j++) {
          if (cur[j] !== words[i][j]) diff++;
        }
        if (diff === 1) {
          // 한 글자만 다르면 큐에 추가
          visited[i] = true; // 방문한 단어 체크 중복 탐색 방지
          queue.push([words[i], answer + 1]); //변환 횟수를 1증가시켜 큐에 추가
        }
      }
    }
  }
  return 0; // 변환할 수 없는 경우
}

//1. solution함수가 실행되면 words에 target이 없으면 0을 리턴한다.
//2. queue에 begin과 0을 넣는다.
//3. visited는 words리스트에서 사용된 단어를 체크하는 방문 여부.
//4. BFS실행하여 큐에서 현재 단어 cur과 변환 횟수 answer를 꺼낸다.
//5. cur이 target과 같다면 변환 횟수를 반환한다.
//6. words 리스트를 돌면서 방문하지 않은 단어를 찾는다.
//7. cur과 비교해서 한글자만 다른 단어(diff === 1)를 찾으면 visited[i]를 ture로 변경 중복탐색 방지
//8. 변환 횟수를 1 증가시켜 큐에 추가

//참고자료 - https://cjy00n.tistory.com/191
