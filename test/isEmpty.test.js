import { assert } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
    it('should return true for null or undefined', () => {
        assert.isTrue(isEmpty(null));
        assert.isTrue(isEmpty(undefined));
    });

    it('should return true for boolean values', () => {
        assert.isTrue(isEmpty(true));
        assert.isTrue(isEmpty(false));
    });

    it('should return true for numbers', () => {
        assert.isTrue(isEmpty(1));
        assert.isTrue(isEmpty(0));
    });

    it('should return true for empty strings and false for non-empty strings', () => {
        assert.isTrue(isEmpty(''));
        assert.isFalse(isEmpty('abc'));
      });

    it('should return true for empty arrays and false for non-empty arrays', () => {
        assert.isTrue(isEmpty([]));
        assert.isFalse(isEmpty([1, 2, 3]));
    });

    it('should return true for empty objects and false for non-empty objects', () => {
        assert.isTrue(isEmpty({}));
        assert.isFalse(isEmpty({ 'a': 1 }));
    });

    it('should return true for empty maps and false for non-empty maps', () => {
        const emptyMap = new Map();
        const nonEmptyMap = new Map([['key', 'value']]);
        const emptySet = new Set();
        const nonEmptySet = new Set([1]);
        
        assert.isTrue(isEmpty(emptyMap));
        assert.isFalse(isEmpty(nonEmptyMap));
        assert.isTrue(isEmpty(emptySet));
        assert.isFalse(isEmpty(nonEmptySet));
    });

    it('should return true for empty Buffer and false for non-empty Buffer', () => {
        const emptyBuffer = Buffer.alloc(0);
        const nonEmptyBuffer = Buffer.alloc(1);

        assert.isTrue(isEmpty(emptyBuffer));
        assert.isFalse(isEmpty(nonEmptyBuffer));
    });

    it('should return true for empty arguments and false for non-empty arguments', () => {
        const emptyArguments = (function() { return arguments; })();
        const nonEmptyArguments = (function() { return arguments; })(1);

        assert.isTrue(isEmpty(emptyArguments));
        assert.isFalse(isEmpty(nonEmptyArguments));
    });

    
});