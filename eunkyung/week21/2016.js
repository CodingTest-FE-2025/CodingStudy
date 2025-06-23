function solution(s, n) {
  const list = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const countList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;
  for (let i = 0; i < s - 1; i++) {
    count = count + countList[i];
  }
  return list[(count + n - 1) % 7];
}
