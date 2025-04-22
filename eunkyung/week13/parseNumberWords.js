function solution(s) {
  const wordList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) {
      const word = s[i] + s[i + 1];
      const index = wordList.findIndex((str) => str.includes(word));
      s = s.replace(wordList[index], index);
    }
  }

  return Number(s);
}

console.log(solution("one4seveneight")); //1478
