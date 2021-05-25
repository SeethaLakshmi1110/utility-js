const filter = require('./filter');

describe('Filter', () => {
    it('Filter of an empty list with any function called should return empty list', () => {
        const functionCall = () => true;
        expect(filter([], functionCall)).toEqual([]);
    });

    it('Filter of a non empty list called with valid function should return the same list', () => {
        const functionCall = () => true;
        expect(filter([1,2,3], functionCall)).toEqual([1,2,3]);
    });

    it('Filter of a non empty list called with invalid function should return the empty list', () => {
        const functionCall = () => false;
        expect(filter([1,2,3], functionCall)).toEqual([]);
    });

    it('Filter of a non empty list called with other function should return the respective values based on the given function', () => {
        const functionCall = (value) => value > 1;
        expect(filter([1,2,3], functionCall)).toEqual([2,3]);
    });

    it('Filter of a non empty list called with some other function should return the respective values based on the given function', () => {
        const functionCall = (character) => character.toUpperCase() === character;
        expect(filter(['a', 'B', 'c', 'D'], functionCall)).toEqual(['B','D']);
    });
});