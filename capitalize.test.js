import { capitalize } from "./capitalize.js";

test("happy path", () => {
  expect(capitalize("hello").toBe("Hello"));
});
