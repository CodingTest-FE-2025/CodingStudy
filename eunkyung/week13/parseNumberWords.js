function solution(s) {
  let result = "";
  let buffer = "";
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
      buffer += s[i];
      const index = wordList.findIndex((str) => str === buffer);
      console.log(index);
      if (index !== -1) {
        result += index;
        buffer = "";
      }
    } else {
      result += s[i];
    }
  }

  return Number(result);
}

console.log(solution("one4seveneight")); //1478
