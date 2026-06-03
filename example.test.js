import assert from "node:assert";
import test from "node:test";
import { isValidUrl } from "./script.js";

// Test URL Validation, test edge cases(http, https, XSS ,ftp, invalid-url)
test("isValidUrl blocks bad protocols and accepts valid web links", () => {
  const cases = [
    { input: "https://google.com", expected: true }, // Accepts https protocol
    { input: "http://localhost:3000", expected: true }, // Accepts http protocol
    { input: "javascript:alert('xss')", expected: false }, // Blocks XSS exploits (Hacks)
    { input: "ftp://files.com", expected: false },  // Blocks wrong protocols
    { input: "not-a-url", expected: false }, // Blocks unknown strings
  ];

  cases.forEach(({ input, expected }) => {
    assert.strictEqual(isValidUrl(input), expected, `Failed on: ${input}`);
  });
});
