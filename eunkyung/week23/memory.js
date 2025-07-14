function solution(name, yearning, photo) {
  const result = [];
  photo.forEach((value) => {
    const answer = sumPoint(name, yearning, value);
    result.push(answer);
  });

  return result;
}

function sumPoint(name, yearning, arr) {
  let sum = 0;
  arr.forEach((value) => {
    const index = name.indexOf(value);
    if (index !== -1) {
      sum += yearning[index];
    }
  });
  return sum;
}
