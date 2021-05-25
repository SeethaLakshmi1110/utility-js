const max = require('./max');

describe('Add', () => {

    it('Max of an empty list is null', () => {
        expect(max([])).toBe(null);
    });

    it('Max of list [1] is 1', () => {
        expect(max([1])).toEqual(1);
    });

    it('Max of list [1, 2, 3] is 1', () => {
        expect(max([1, 2, 3])).toEqual(3);
    });

})
