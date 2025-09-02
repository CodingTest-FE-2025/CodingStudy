function solution(number, k) {
  let result = [];

  for (let i = 0; i < number.length; i++) {
    let current = number[i];

    while (k > 0 && result.length > 0 && result[result.length - 1] < current) {
      result.pop();
      k--;
    }

    result.push(current);
  }

  result = result.slice(0, result.length - k);

  return result.join("");
}
