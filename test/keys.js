import { assert } from 'chai';
import keys from '../src/keys.js';

describe('keys', () => {

  it('should return keys for a plain object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    assert.deepStrictEqual(keys(obj), ['a', 'b', 'c']);
  });

  it('should not include inherited properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const obj = new Foo();
    assert.deepStrictEqual(keys(obj), ['a', 'b']);
  });

  it('should return indices for an array', () => {
    const arr = [1, 2, 3];
    assert.deepStrictEqual(keys(arr), ['0', '1', '2']);
  });

  it('should return indices for a string', () => {
    const str = 'hi';
    assert.deepStrictEqual(keys(str), ['0', '1']);
  });

  it('should return an empty array for numbers or booleans', () => {
    assert.deepStrictEqual(keys(42), []);
    assert.deepStrictEqual(keys(true), []);
  });

  it('should throw a TypeError for null or undefined', () => {
    assert.throws(() => keys(null), TypeError, 'Cannot convert undefined or null to object');
    assert.throws(() => keys(undefined), TypeError, 'Cannot convert undefined or null to object');
  });

  it('should handle custom array-like objects', () => {
    const arrayLike = { 0: 'a', 1: 'b', length: 2 };
    assert.deepStrictEqual(keys(arrayLike), ['0', '1', 'length']);
  });
});
