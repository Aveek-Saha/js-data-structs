var { ZSearch } = require('../dist/js-data-structs.cjs');

describe('Check Z algorithm', () => {
    it('should be able to search for pattern in the string', () => {


        expect(ZSearch('aabcaabxaaaz', 'ab')).toEqual([ 1, 5 ]);
        expect(ZSearch('xaaay', 'aa')).toEqual([ 1, 2 ]);
    });

    it('should return empty array if pattern not found', () => {

        var text = 'aabcaabxaaaz';

        expect(ZSearch(text, 'asb')).toEqual([]);
    });
});
