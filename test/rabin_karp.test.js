var { BinarySearch } = require('../dist/js-data-structs.cjs');

describe('Check Binary search', () => {
    it('should return the index of the element if found', () => {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(BinarySearch(arr, 0, arr.length, 6)).toBe(5);
    });

    it('should return the -1 if the element is not found', () => {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(BinarySearch(arr, 0, arr.length, 11)).toBe(-1);
    });

});