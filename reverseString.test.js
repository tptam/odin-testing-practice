import { reverseString } from "./reverseString.js";

test("happy path", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("edge: empty string", () => {
  expect(reverseString("")).toBe("");
});
