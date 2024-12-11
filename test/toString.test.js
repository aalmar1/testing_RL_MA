import { assert } from 'chai';
import toString from '../src/toString.js';

describe('toString.js', () => {
  it('should return the same string for string inputs', () => {
    assert.strictEqual(toString('hello'), 'hello');
    assert.strictEqual(toString(''), '');
  });

  it('should return an empty string for null or undefined', () => {
    assert.strictEqual(toString(null), '');
    assert.strictEqual(toString(undefined), '');
  });

  it('should convert numbers to their string representation', () => {
    assert.strictEqual(toString(123), '123');
    assert.strictEqual(toString(0), '0');
    assert.strictEqual(toString(-0), '-0');
  });

  it('should convert booleans to their string representation', () => {
    assert.strictEqual(toString(true), 'true');
    assert.strictEqual(toString(false), 'false');
  });

  it('should recursively convert array elements to a string', () => {
    assert.strictEqual(toString([1, 2, 3]), '1,2,3');
    assert.strictEqual(toString(['a', 'b', null]), 'a,b,');
    assert.strictEqual(toString([[1, 2], [3, 4]]), '1,2,3,4');
  });

  it('should convert symbols to their string representation', () => {
    const symbol = Symbol('test');
    assert.strictEqual(toString(symbol), 'Symbol(test)');
  });

  it('should convert objects to their default string representation', () => {
    assert.strictEqual(toString({ a: 1 }), '[object Object]');
  });

  it('should handle edge cases like functions or unusual objects', () => {
    const func = function () {};
    assert.strictEqual(toString(func), func.toString());

    const date = new Date(0);
    assert.strictEqual(toString(date), date.toString());
  });

  it('should handle mixed types in arrays', () => {
    const mixedArray = [1, 'a', null, Symbol('x'), [2, 3]];
    assert.strictEqual(toString(mixedArray), '1,a,,Symbol(x),2,3');
  });
});