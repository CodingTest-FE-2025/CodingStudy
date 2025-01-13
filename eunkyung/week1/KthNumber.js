function solution(array, commands) {
  var answer = [];

  for (let k = 0; k < commands.length; k++) {
    const sliceArray = array.slice(commands[k][0] - 1, commands[k][1]);
    for (let i = 0; i <= sliceArray.length; i++) {
      for (let j = i + 1; j <= sliceArray.length; j++) {
        if (sliceArray[i] > sliceArray[j]) {
          let nextNum = sliceArray[j];
          sliceArray[j] = sliceArray[i];
          sliceArray[i] = nextNum;
        }
      }
    }
    answer.push(sliceArray[commands[k][2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

//return [5, 6, 3]
