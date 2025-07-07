function solution(s) {
  const lowerStr = s.toLowerCase();
  const pCount = countString(lowerStr, "p");
  const yCount = countString(lowerStr, "y");

  if (pCount === 0 && yCount === 0) return true;
  return pCount === yCount ? true : false;
}

function countString(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

console.log(solution("Pyy"));
