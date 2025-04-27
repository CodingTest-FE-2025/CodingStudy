function solution(n, arr1, arr2) {
  binaryArr1 = binary(arr1, n);
  binaryArr2 = binary(arr2, n);
  let result = [];
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] + binaryArr2[i][j] >= 1) {
        string += "#";
      } else {
        string += " ";
      }
    }
    result.push(string);
  }
  return result;
}

function binary(arr, n) {
  const newArr = [];
  arr.forEach((vlaue) => {
    let binaryNumber = vlaue.toString(2);
    if (binaryNumber.length < n) {
      binaryNumber = "0".repeat(n - binaryNumber.length) + binaryNumber;
    }
    newArr.push(binaryNumber);
  });
  return newArr;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); //["#####","# # #", "### #", "# ##", "#####"]
