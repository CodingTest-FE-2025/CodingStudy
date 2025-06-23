function solution(x) {
  const string = String(x);
  let numberSum = 0;
  for (const char of string) {
    numberSum = numberSum + Number(char);
  }
  return x % numberSum === 0 ? true : false;
}
