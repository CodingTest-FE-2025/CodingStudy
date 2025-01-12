function solution(numbers) {
  var answer = "";

  numbers.sort((a, b) => {
    let aNum = a.toString();
    let bNum = b.toString();
    if (aNum === bNum) {
      return 0;
    } else if (aNum + bNum < bNum + aNum) {
      return 1;
    } else {
      return -1;
    }
  });
  answer = numbers.toString().replaceAll(",", "");
  let intAnswer = BigInt(answer);
  answer = intAnswer.toString();

  return answer;
}

console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); //"9534330"
console.log(solution([0, 0, 0, 0])); //'0'
