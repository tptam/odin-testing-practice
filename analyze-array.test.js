import { analyzeArray } from "./analyze-array.js";

test("happy path 1", () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("happy path 2", () => {
  const array = [2, 4, 6];
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 2,
    max: 6,
    length: 3,
  });
});
