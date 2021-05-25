const reduce = require('./reduce');

describe('Reduce', () => {
    it('Reduce of an empty list only with function call should return empty list', () => {
        const functionCall = (x, y) => x + y;
        expect(reduce([], functionCall)).toEqual([]);
    });

    it('Reduce of a non empty list called with function should return the same list', () => {
        const functionCall = (x, y) => x + y;
        expect(reduce([], functionCall, 10)).toEqual(10);
    });

    it('Reduce of a non empty list called with other function should return the respective values based on the given function', () => {
        const functionCall = (x, y) => x + y;
        expect(reduce(['a', 'b', 'c'], functionCall, [])).toEqual('abc');
    });

    it('Reduce of a non empty list called with some other function should return the respective values based on the given function', () => {
        const functionCall = (x, y) => x + y;
        expect(reduce(['a', 'b', 'c'], functionCall, 'z')).toEqual('zabc');
    });
});