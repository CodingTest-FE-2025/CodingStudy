const input = +require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./week3/card.txt"
  )
  .toString()
  .trim();

let square = 2;

while (true) {
  if (input === 1 || input === 2) {
    console.log(input);
    break;
  }
  square *= 2;
  if (square >= input) {
    console.log((input - square / 2) * 2);
    break;
  }
}
