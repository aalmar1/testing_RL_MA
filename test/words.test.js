import { assert } from 'chai';
import words from '../src/words.js';

describe('words', () => {
  it('should split a string into words by default', () => {
    assert.deepStrictEqual(words('fred, barney, & pebbles'), ['fred', 'barney', 'pebbles']);
  });

  it('should split a string based on a custom pattern', () => {
    assert.deepStrictEqual(words('fred, barney, & pebbles', /[^, ]+/g), ['fred', 'barney', '&', 'pebbles']);
  });

  it('should split a string with ASCII words', () => {
    assert.deepStrictEqual(words('hello world 123'), ['hello', 'world', '123']);
  });

  it('should handle Unicode words', () => {
    assert.deepStrictEqual(words('你好，世界'), ['你好', '世界']);
  });

  it('should return an empty array for an empty string', () => {
    assert.deepStrictEqual(words(''), []);
  });

  it('should return an empty array for null or undefined', () => {
    assert.deepStrictEqual(words(null), []);
    assert.deepStrictEqual(words(undefined), []);
  });

  it('should convert non-string input to a string and split into words', () => {
    assert.deepStrictEqual(words(12345), ['12345']);
    assert.deepStrictEqual(words(true), ['true']);
  });

  it('should handle a single word string', () => {
    assert.deepStrictEqual(words('word'), ['word']);
  });

  it('should ignore punctuation by default', () => {
    assert.deepStrictEqual(words('hello! how are you?'), ['hello', 'how', 'are', 'you']);
  });
});
