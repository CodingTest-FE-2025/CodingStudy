function solution(a, b) {
  var answer = "";
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  a = a - 1;
  var sum = 0;
  for (let i = 0; i < a; i++) {
    sum += month[i];
  }
  sum += b;
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  answer = day[(sum - 1) % 7];
  return answer;
}
