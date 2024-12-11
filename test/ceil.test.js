import { assert } from "chai";
import ceil from "../src/ceil.js";

describe('ceil.js', () => {

    it('should return a number rounded up to the nearest integer', () => {
        assert.strictEqual(ceil(4.006), 5);
    });

    it('should return a number rounded up to the nearest 2 decimals', () => {
        assert.strictEqual(ceil(6.004, 2), 6.01);
    });

    it('should return a number rounded up to the nearest 100', () => {
        assert.strictEqual(ceil(6040, -2), 6100);
    });

    it('should handle negative numbers', () => {
        assert.strictEqual(ceil(-4.006), -4);
    });

    it('should handle negative rounded to 2 decimals', () => {
        assert.strictEqual(ceil(-5.084, 2), -5.08);
    });
});