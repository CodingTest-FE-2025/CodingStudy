function solution(s) {
  if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("0x16"));
