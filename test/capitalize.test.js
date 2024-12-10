import {assert} from 'chai'; 
import capitalize from '../src/capitalize.js';


describe('Tests for function: capitalize', () => {
    it('should capitalize a lowercase string', () => {
        assert.equal(capitalize('hello'), 'Hello');
    });

    it('should capitalize an uppercase string', () => {
        assert.equal(capitalize('TAISTO'), 'Taisto');
    });

    it('should handle mixed-case strings', () => {
        assert.equal(capitalize('hElLo'), 'Hello');
    });

    it('should handle empty strings', () => {
        assert.equal(capitalize(''), '');
    });

    it('should handle non-string inputs', () => {
        assert.equal(capitalize(123), '123');
    });
});
