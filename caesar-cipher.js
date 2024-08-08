const az = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function shift(char, n) {
  if (az.includes(char)) {
    const index = az.indexOf(char);
    return az.at((index + n) % 26);
  } else if (az.includes(char.toLowerCase())) {
    return shift(char.toLowerCase(), n).toUpperCase();
  } else {
    return char;
  }
}

export function caesarCipher(string, n) {
  return string
    .split("")
    .map((char) => shift(char, n))
    .join("");
}
