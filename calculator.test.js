// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

import { calculator } from "./calculator.js";

test("happy path: add integer", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("happy path: add float", () => {
  expect(calculator.add(0.2, 0.3)).toBeCloseTo(0.5);
});

test("happy path: subtract integer", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("happy path: subtract float", () => {
  expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
});

test("happy path: multiply integer", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("happy path: multiply float", () => {
  expect(calculator.multiply(0.3, 0.2)).toBeCloseTo(0.06);
});

test("happy path: divide integer", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("happy path: divide float", () => {
  expect(calculator.divide(0.3, 0.2)).toBeCloseTo(1.5);
});
