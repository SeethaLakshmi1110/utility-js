const map = require('./map');

describe('Map', () => {
    it('Map of an empty list with any function called should return null', () => {
        const cube = (value) => value * value * value;
        expect(map([], cube)).toEqual([]);
    });

    it('Map of a non empty list called with identity function should return the same list', () => {
        const identity = (value) => value;
        expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
    });

    it('Map of a non empty list called with cube function should return the cube values of list elements', () => {
        const cube = (value) => value * value * value;
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('Map of a non empty list called with some other function should return the respective values based on the given function', () => {
        const addOneToValue = (someObject) => someObject.x + 1;
        expect(map([{x: 10}], addOneToValue)).toEqual([11]);
    });
});