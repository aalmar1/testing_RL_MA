import { assert } from "chai";
import ceil from "../src/ceil.js";

describe('ceil.js', () => {

    it('should round up to the nearest integer by default', () => {
        assert.strictEqual(ceil(4.006), 5);
        assert.strictEqual(ceil(6.004), 7);
        assert.strictEqual(ceil(6040), 6040);
    });

    it('should round up to the specified precision', () => {
        assert.strictEqual(ceil(6.004, 2), 6.01);
        assert.strictEqual(ceil(6.004, 1), 6.1);
        assert.strictEqual(ceil(6.004, 0), 7);
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

    it('should handle edge cases', () => {
        assert.strictEqual(ceil(0), 0);
        assert.strictEqual(ceil(-0), 0);
        assert.strictEqual(ceil(Infinity), Infinity);
        assert.strictEqual(ceil(-Infinity), -Infinity);
    });

    it('should handle NaN and non-numeric inputs', () => {
        assert.isNaN(ceil(NaN));
        assert.isNaN(ceil('hello'));
        assert.isNaN(ceil(undefined));
        // null is treated as 0+ in the function so it should return 0
        assert.strictEqual(ceil(null), 0);
    });
});