// https://school.programmers.co.kr/learn/courses/30/lessons/43163
// ["hot","dot","dog","lot","log","cog"]
// hit -> cog
//

/**
 * 생각한 방법
 *
 * words에 cog이 있으므로 0이 아님..
 *
 * words보고 자리수별로 사용할수 있는 단어 조합 중복제외는 Set 사용..?
 * ["h",null,null]
 * ["d",null,null]
 * ["l",null,null]
 * ["c",null,null]
 * [null,"o",null]
 * [null,null,"t"]
 * [null,null,"g"]
 *
 * queue 생성 [["h" "i" "t"]]
 * queue가 없을때까지 while로 알파벳을 하나씩 교체..
 *
 * answer = 0
 *
 * if target이 words에 없으면 answer 리턴
 *
 * if 본인과 같은 단어면 continue -> 1번if
 * if words에 없는 단어면 continue -> 2번if
 * if 이미 사용한 단어는 continue -> 3번if (무시)
 *
 * if 단어가 target과 같으면 answer 리턴
 *
 *
 * 예시)
 *
 * -- hit 시작
 *
 * q에 hit 제거 shift()
 * hit -> 1번if
 * dit -> 2번if
 * lit -> 2번if
 * cit -> 2번if
 * hot -> q에 push() & words에서 사용한 hot 제거 (현재 q = [["h", "o", "t"]] /// 현재 words = ["dot","dog","lot","log","cog"])
 * hit -> 1번if
 * hig -> 2번if
 *
 * -- hot 시작 answer++
 * q에 hot 제거 shift()
 * hot -> 1번if
 * dot -> q에 push() & words에서 사용한 dot 제거 (현재 q = [["d", "o", "t"]] /// 현재 words = ["dog","lot","log","cog"])
 * lot -> q에 push() & words에서 사용한 lot 제거 (현재 q = [["d", "o", "t"], ["l", "o", "t"]] /// 현재 words = ["dog","log","cog"])
 * cot -> 2번if
 * hot -> 1번if
 * hot -> 1번if
 * hog -> 2번if
 *
 * -- dot 시작 answer++
 * q에 dot 제거 shift()
 * hot -> 2번if
 * dot -> 1번if
 * lot -> 2번if
 * dot -> 1번if
 * dot -> 1번if
 * dog -> q에 push() & words에서 사용한 dog 제거 (현재 q = [["l", "o", "t"], ["d", "o", "g"]] /// 현재 words = ["log","cog"])
 * -- lot 시작 answer 변화 없음
 * q에 lot 제거 shift()
 * hot -> 2번if
 * dot -> 2번if
 * lot -> 1번if
 * cot -> 2번if
 * lot -> 1번if
 * lot -> 1번if
 * log -> q에 push() & words에서 사용한 log 제거 (현재 q = [["d", "o", "g"], ["l", "o", "g"]] /// 현재 words = ["cog"])
 *
 * -- dog 시작 answer++
 * q에 dog 제거 shift()
 * hog -> 2번if
 * dog -> 1번if
 * log -> 2번if
 * cog 완료 answer = 4
 *
 */

function solution(begin, target, words) {
  let answer = 0; // 변화 단계 (정답)

  // words 배열 복사 (원본 배열 변경 방지) ["hot","dot","dog","lot","log","cog"]
  let wordsCopy = [...words];

  // if target이 wordsCopy에 없으면 answer 리턴
  if (wordsCopy.indexOf(target) === -1) return answer;

  let wordLength = begin.length; // 단어 길이 3
  let wordWrap = []; // 각 자리별 후보를 저장할 빈 배열
  for (let i = 0; i < wordLength; i++) {
    wordWrap[i] = new Set(); // 각 자리마다 새로운 Set 생성 (중복 자동 제거)
  }
  // wordsCopy에서 각 자리의 알파벳들을 수집
  for (let i = 0; i < wordsCopy.length; i++) {
    let word = wordsCopy[i];
    for (let j = 0; j < wordLength; j++) {
      wordWrap[j].add(word[j]); // 예시: "hot"이면, 0번째에 'h', 1번째에 'o', 2번째에 't' 추가
    }
  }
  // Set을 배열로 변환 (각 자리별 후보 알파벳들을 배열로 사용)
  let wordArr = [];
  for (let i = 0; i < wordLength; i++) {
    wordArr[i] = Array.from(wordWrap[i]);
    // wordArr[0] = ["h", "d", "l", "c"], wordArr[1] = ["o"], wordArr[2] = ["t", "g"]
  }

  // begin 단어를 문자 배열로 분리하여 queue에 저장 ["h", "i", "t"]
  let queue = [begin.split("")];

  // queue가 없을때까지 while로 알파벳을 하나씩 교체
  while (queue.length > 0) {
    // 다음 후보를 저장할 빈 배열
    let nextQueue = [];

    // 현재 있는 단어들을 하나씩 처리
    for (let i = 0; i < queue.length; i++) {
      let currentArr = queue[i]; // ["h", "i", "t"]
      let currentWord = currentArr.join(""); // 문자 배열을 문자열로 합침 → "hit"

      // if 단어가 target과 같으면 현재 단계(answer) 리턴
      if (currentWord === target) return answer;

      // 각 자리별로 알파벳 교체 시도
      for (let pos = 0; pos < wordLength; pos++) {
        // 해당 자리에서 가능한 모든 알파벳 후보에 대해 반복
        for (let k = 0; k < wordArr[pos].length; k++) {
          let letter = wordArr[pos][k]; // pos가 0이면 letter는 "h", "d", "l", "c" 중 하나

          // if 본인과 같은 알파벳이면 continue
          if (currentArr[pos] === letter) continue;

          // 새로운 단어 배열 생성 (원본 변경 방지)
          let newArr = [...currentArr];
          newArr[pos] = letter;
          let newWord = newArr.join(""); // 변경된 배열을 문자열로 합침
          // "hit"의 0번째 문자 'h'를 'd'로 바꾸면 "dit", "hit"의 1번째 문자 'i'를 'o'로 바꾸면 "hot"

          // if wordsCopy에 newWord가 없으면 continue
          if (wordsCopy.indexOf(newWord) === -1) continue;

          // 다음 단계 후보로 저장
          nextQueue.push(newArr);

          // 사용한 newWord를 wordsCopy에서 제거 (중복 변환 방지) "hot"을 사용했다면 wordsCopy에서 제거되어 다시 사용되지 않음
          wordsCopy.splice(wordsCopy.indexOf(newWord), 1);
        }
      }
    }

    // 다음 단계로 넘어감 (answer 증가)
    answer++;

    // 다음 단계 후보로 저장된 단어들로 queue를 교체
    queue = nextQueue;
  }

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
