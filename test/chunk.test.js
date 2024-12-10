import {assert} from 'chai';
import {expect} from 'chai';
import chunk from '../src/chunk.js';

describe ('Tests for function: chunk', () => {
    it('should split an array into chunks of the specified size', () => {
        assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']],);
    });

    it('Final chunk should contain the remaining elements', () => {
        assert.deepEqual(chunk(['a', 'b', 'c', 'd', 'e'], 3), [['a', 'b', 'c'], ['d', 'e']]);
    });

    it('should handle empty arrays', () => {
        assert.deepEqual(chunk([], 3), []);
    });

    it('should handle non-array inputs', () => {
        assert.deepEqual(chunk(123), []);
    });

    it('should handle non-integer size inputs (by rounding down)', () => {
        assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 1.5), [['a', 'b', 'c', 'd']]);
    });

    it('should handle negative size inputs', () => {
        assert.deepEqual(chunk(['a', 'b', 'c', 'd'], -1), []);
    });

    it ('should handle size = 0', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 0)).to.deep.equal([]);
    });

    it ('should handle size > array.length', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 5)).to.deep.equal([['a', 'b', 'c', 'd', undefined]]);
    });
});