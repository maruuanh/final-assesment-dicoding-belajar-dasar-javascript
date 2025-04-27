import assert from 'node:assert';
import {test} from 'node:test';
import sum from './index.js';

test('Result must be 5', () => {
    assert.equal(sum(2,3), 5);
});
