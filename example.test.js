// Simple localStorage mock for Node
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value;
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  },
};

import assert from "node:assert";
import test from "node:test";
import { getUserIds, setData, getData } from "./storage.js";
import { addBookmark, generateId, isValidUrl } from "./script.js";

// 1. Test URL Validation, test edge cases(http, https, XSS ,ftp, invalid-url)

test("isValidUrl blocks bad protocols and accepts valid web links", () => {
  const cases = [
    { input: "https://google.com", expected: true }, // Accepts https protocol
    { input: "http://localhost:3000", expected: true }, // Accepts http protocol
    { input: "javascript:alert('xss')", expected: false }, // Blocks XSS exploits (Hacks)
    { input: "ftp://files.com", expected: false }, // Blocks wrong protocols
    { input: "not-a-url", expected: false }, // Blocks unknown strings
  ];

  cases.forEach(({ input, expected }) => {
    assert.strictEqual(isValidUrl(input), expected, `Failed on: ${input}`);
  });
});

// 2. Adding a bookmark stores correct data

test("Adding a bookmark stores correct data structure", () => {
  const userId = "user1";
  setData(userId, []);

  addBookmark(userId, "Test Title", "https://example.com", "Test description");

  const bookmarks = getData(userId);

  assert.equal(bookmarks.length, 1);
  assert.equal(bookmarks[0].title, "Test Title");
  assert.equal(bookmarks[0].url, "https://example.com");
  assert.equal(bookmarks[0].description, "Test description");
  assert.equal(bookmarks[0].likes, 0);
  assert.ok(bookmarks[0].id);
});

// 3. generateId produces valid, unique base‑36 identifiers

test("generateId returns a string", () => {
  const id = generateId();
  assert.strictEqual(typeof id, "string");
});

test("generateId returns unique values", () => {
  const id1 = generateId();
  const id2 = generateId();
  assert.notStrictEqual(id1, id2);
});

test("generateId returns only base-36 characters", () => {
  const id = generateId();
  assert.match(id, /^[a-z0-9]+$/);
});
