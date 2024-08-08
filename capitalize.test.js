import { capitalize } from "./capitalize.js";

test("happy path", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("edge: empty string", () => {
  expect(capitalize("")).toBe("");
});

test("edge: already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("edge: non-alphabet", () => {
  expect(capitalize("123")).toBe("123");
});
