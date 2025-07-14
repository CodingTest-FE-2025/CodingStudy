function solution(s) {
  const answer = [];
  const words = s.split(" ");
  // ["3people", "Unfollowed", "Me"] 띄어쓰기 기준으로 나누기
  words.forEach((value) => {
    answer.push(JadenCase(value));
  });
  return answer.join(" ");
}

function JadenCase(str) {
  const words = str.toLowerCase().split(" ");
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ");
}

console.log(solution("3people unFollowed me"));
