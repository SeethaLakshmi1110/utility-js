const tail = require('./tail');

describe('Tail', () => {

    it('Tail of an empty list is null', () => {
        expect(tail([])).toBe(null);
    });

    it('Head of [1, 2, 3] is [2, 3]', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
    });

})
