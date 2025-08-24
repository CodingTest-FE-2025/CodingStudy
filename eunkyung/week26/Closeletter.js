function solution(s) {
  const temp = [];
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    if (temp.indexOf(value) === -1) {
      temp.push(value);
      result.push(-1);
    } else {
      let end = -1;
      temp.forEach((item, index) => {
        if (item === value) {
          end = index;
        }
      });
      temp.push(value);
      result.push(temp.length - (end + 1));
    }
  }
  return result;
}
