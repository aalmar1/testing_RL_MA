import {expect} from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo.js', () => {

    it('should return the default value if the input is null', () => {
        expect(defaultTo(null, 10)).to.equal(10);
    });

    it('should return the default value if the input is undefined', () => {
        expect(defaultTo(undefined, 10)).to.equal(10);
    });

    it('should return the default value if the input is NaN', () => {
        expect(defaultTo(NaN, 10)).to.equal(10);
    });

    it('should handle strings', () => {
        expect(defaultTo('hello', 'world')).to.equal('hello');
    });

    it ('should handle numbers', () => {
        expect(defaultTo(123, 456)).to.equal(123);
    });

    it('should handle objects', () => {
        expect(defaultTo({ 'a': 1 }, { 'b': 2 })).to.deep.equal({ 'a': 1 });
    });

    it('should handle arrays', () => {
        expect(defaultTo([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3]);
    });
});