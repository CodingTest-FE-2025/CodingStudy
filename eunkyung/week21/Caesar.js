function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65);
      } else if (char >= "a" && char <= "z") {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}
