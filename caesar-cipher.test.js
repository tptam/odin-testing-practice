import { caesarCipher } from "./caesar-cipher.js";

test("a-z", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 7)).toBe(
    "hijklmnopqrstuvwxyzabcdefg"
  );
});

test("case preservation", () => {
  expect(caesarCipher("HelloWorld", 3)).toBe("KhoorZruog");
});

test("punctuation", () => {
  expect(caesarCipher("isn't she lovely?", 5)).toBe("nxs'y xmj qtajqd?");
});
