const min = require('./min');

describe('Min', () => {

    it('Min of an empty list is null', () => {
        expect(min([])).toBe(null);
    });

    it('Max of list [1] is 1', () => {
        expect(min([1])).toEqual(1);
    });

    it('Max of list [1, 2, 3] is 1', () => {
        expect(min([1, 2, 3])).toEqual(1);
    });

})
