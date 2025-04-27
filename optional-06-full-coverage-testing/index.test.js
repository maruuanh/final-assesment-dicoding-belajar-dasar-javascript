import assert from 'node:assert';
import { test } from 'node:test';
import sum from './index.js';

test('must have result to be 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('must have result to be 0 if the values are not number', () => {
  assert.strictEqual(sum("2", "3"), 0);
});

test('must have result to be 0 if the values are less than 0', () => {
  assert.strictEqual(sum(-1, -5), 0);
});