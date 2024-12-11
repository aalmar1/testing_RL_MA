import { assert } from 'chai';
import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {

  it('should return true for primitive symbols', () => {
    assert.isTrue(isSymbol(Symbol('test')));
    assert.isTrue(isSymbol(Symbol.iterator));
  });

  it('should return true for Symbol objects', () => {
    assert.isTrue(isSymbol(Object(Symbol('test'))));
  });

  it('should return false for non-symbol primitives', () => {
    assert.isFalse(isSymbol('abc'));
    assert.isFalse(isSymbol(123));
    assert.isFalse(isSymbol(true));
    assert.isFalse(isSymbol(null));
    assert.isFalse(isSymbol(undefined));
  });


  it('should return false for non-symbol objects', () => {
    assert.isFalse(isSymbol({}));
    assert.isFalse(isSymbol([]));
    assert.isFalse(isSymbol(() => {}));
  });

  it('should handle edge cases correctly', () => {
    assert.isFalse(isSymbol(new String('abc')));
    assert.isFalse(isSymbol(new Number(123)));
    assert.isFalse(isSymbol(new Boolean(true))); 
  });
});
