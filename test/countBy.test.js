import { assert, expect } from "chai";
import countBy from "../src/countBy.js";

const MockArray = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'makke', 'active': true},
    { 'user': 'fred', 'active': false },
    { 'user': 'taisto', 'active': false},
]

const MockArray2 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'taisto', 'active': false },
]

const MockObject = {
    'barney': { 'username': 'barney69', 'active': true },
    'betty': { 'username': 'Xx_bettySnipes_xX', 'active': true },
    'markus': { 'username': 'makkeMakkara', 'active': false},
}

describe('countBy.js', () => {

    it('should return an object with the correct keys and amounts', () => {
        assert.deepEqual(countBy(MockArray, value => value.active), { 'true': 3, 'false': 2 });
    });

    it('should return an object with the correct keys and amounts', () => {
        expect(countBy(MockArray2, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    it ('should be able to take input as an object and return correct values', () => {
        expect(countBy(MockObject, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    it('should handle non-boolean values -> read users from array', () => {
        assert.deepEqual(countBy(MockArray2, value => value.user), { 'barney': 1, 'betty': 1, 'taisto': 1 });
    });

    it('should handle simple objects without inner objects', () => {
        assert.deepEqual(countBy({ 'a': 3, 'b': 4, 'c': 3 }, value => value), { '3': 2, '4': 1 });
    });

    it('should count strings in array based on length', () => {
        const words = ['one', 'two', 'three', 'four', 'five'];
        const result = countBy(words, word => word.length);
    
        expect(result).to.deep.equal({ 3: 2, 5: 1, 4: 2 });
    });

    it('should handle empty arrays and objects', () => {
        assert.deepEqual(countBy([], value => value.active), {});
        assert.deepEqual(countBy({}, value => value), {});
    });

    it('should handle null or undefined inputs', () => {
        assert.deepEqual(countBy(undefined, value => value), {});
        assert.deepEqual(countBy(null, value => value), {});
    });
});
