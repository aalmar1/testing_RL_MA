import {assert} from 'chai'; 
import capitalize from '../src/capitalize.js';
import sinon from 'sinon';
import * as upperFirstModule from '../src/upperFirst.js';
import * as toStringModule from '../src/toString.js';

describe('Tests for function: capitalize', () => {
    let upperFirstMock, toStringMock;

    beforeEach(() => {
        // Create mocks for upperFirst and toString
        upperFirstMock = sinon.stub(upperFirstModule, 'default');
        toStringMock = sinon.stub(toStringModule, 'default');
    });

    afterEach(() => {
        // Restore the original functions after each test
        sinon.restore();
    });

    it('should capitalize a lowercase string', () => {
        toStringMock.returns('hello');
        upperFirstMock.returns('Hello');
        assert.equal(capitalize('hello'), 'Hello');
        assert.isTrue(toStringMock.calledOnceWith('hello'));
        assert.isTrue(upperFirstMock.calledOnceWith('hello'));
    });

    it('should capitalize an uppercase string', () => {
        toStringMock.returns('taisto'); 
        upperFirstMock.returns('Taisto'); 
        assert.equal(capitalize('TAISTO'), 'Taisto');
        assert.isTrue(toStringMock.calledOnceWith('TAISTO'));
        assert.isTrue(upperFirstMock.calledOnceWith('taisto'));
    });

    it('should handle mixed-case strings', () => {
        toStringMock.returns('hello');
        upperFirstMock.returns('Hello');
        assert.equal(capitalize('hElLo'), 'Hello');
        assert.isTrue(toStringMock.calledOnceWith('hElLo'));
        assert.isTrue(upperFirstMock.calledOnceWith('hello'));
    });

    it('should handle empty strings', () => {
        toStringMock.returns('');
        upperFirstMock.returns('');
        assert.equal(capitalize(''), '');
        assert.isTrue(toStringMock.calledOnceWith(''));
        assert.isTrue(upperFirstMock.calledOnceWith(''));
    });

    it('should handle non-string inputs', () => {
        toStringMock.returns('123');
        upperFirstMock.returns('123');
        assert.equal(capitalize(123), '123');
        assert.isTrue(toStringMock.calledOnceWith(123));
        assert.isTrue(upperFirstMock.calledOnceWith('123'));
    });
});
